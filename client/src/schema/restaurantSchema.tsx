import {z} from "zod";

export const restaurantFormSchema = z.object({

    restaurantName: z.string().nonempty({message: "Restaurant name is required"}),
    city: z.string().nonempty({message: "city name is required"}),
    country: z.string().nonempty({message: "Country name is required"}),
    deliveryTime: z.number().min(0, {message:" negative" }),
    cuisines: z.array(z.string()),
    imageFile: z.instanceof(File).optional().refine((file) => file?.size !== 0, {message: "Image file is required"})
    // imageFile: z
    // .instanceof(File)
    // .optional()
    // .refine((file) => file !== undefined && file.size > 0, {
    //   message: "Image file is required and cannot be empty",
    // }),
})

export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>