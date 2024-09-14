import {z} from 'zod';

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, 'Password must be at least contain 6 character'),
    contact: z.string().min(6,"Contact number must be 6 digit")
})

export type SignupInputState = z.infer<typeof userSignupSchema>


export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, 'Password must be at least contain 6 character'),
})

export type LoginInputState = z.infer<typeof userLoginSchema>