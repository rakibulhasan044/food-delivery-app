import { Restaurant } from "../models/restaurant.model.js"
import { Multer } from "Multer";
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
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}