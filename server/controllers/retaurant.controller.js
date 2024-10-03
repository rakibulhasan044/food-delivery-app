import { Restaurant } from "../models/restaurant.model.js"
import { Multer } from "Multer";
import uploadImageOnCloudinary from "../utils/imageUpload.js";
export const createRestaurant = async (req, res) => {
    try {
        const { restaurantName, city, country, price, deliveryTime, cuisines } = req.body;
        const file = req.file;
        const restaurant = await Restaurant.findOne({user:req.id});
        if(restaurant) {
            return res.status(400).json({
                success: false,
                message: "Restaurant already exist for this user"
            })
        }
        if(!file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            })
        }
        const imageUrl = await uploadImageOnCloudinary(file);
        await Restaurant.create({
            user: req.id,
            restaurantName,
            city,
            country,
            deliveryTime,
            cuisines: JSON.parse(cuisines),
            imageUrl
        })

        return res.status(201).json({
            success: true,
            message: "Restaurant Added"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({user:user.id})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}