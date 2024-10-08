import {Restaurant} from "../models/restaurant.model.js"
import { Order } from "../models/order.model.js";
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config(); 

const stripe = await Stripe(process.env.STRIPE_SECRET_KEY);

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({user: req.id}).populate('user').populate('restaurant');
        return res.status(200).json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Enternal server error"
        })
    }
}

export const createCheckoutSession = async (req, res) => {
    try {
        const checkoutSessionRequest = req.body;
        const restaurant = await Restaurant.findById(checkoutSessionRequest.restaurantId).pupulate("menu");
        if(!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant not found"
            })
        }
        const order = new Order({
            restaurant: restaurant._id,
            user: req.id,
            deliveryDetails:  checkoutSessionRequest.deliveryDetails,
            cartItems: checkoutSessionRequest.cartItems,
            status: "pending"
        });
        
        //line items
        const menuItems = restaurant.menus;
        const lineItems = createLineItems(checkoutSessionRequest, menuItems);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['GB', 'US', 'CA']
            },
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/order/status`,
            cancel_url: `${process.env.FRONTEND_URL}/cart`,
            metadata: {
                orderId: order._id.toString(),
                images:JSON.stringify(menuItems.map((item) => item.image))
            }
        })
        if(!session.url){
            return res.status(400).json({
                success: false,
                message: "Error while creating session"
            })
        }

        await order.save();
        return res.status(200).json({
            session
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Enternal server error"
        })
    }
}

export const createLineItems = (checkoutSessionRequest, menuItems) => {
    // 1.create line items
    const lineItems = checkoutSessionRequest.cartItems.map((cartItem) => {
        const menuItem = menuItems.find((item) => item._id === cartItem.menuId)
        if(!menuItem) throw new Error(`Menu item is not found`);

        return{
            price_data: {
                currency:"TK",
                product_data: {
                    name: menuItem.name,
                    images: [menuItem.image]
                },
                unit_amount: menuItem.price * 100
            },
            quantity: cartItem.quantity,
        }
    })

    //2. return lineitems
    return lineItems;
}