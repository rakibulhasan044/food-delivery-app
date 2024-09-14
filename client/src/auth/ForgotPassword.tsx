import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('');
    const loading = true;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col mb:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-2">Forgot Password</h1>
                    <p className="text-sm text-gray-600 mb-2">Enter your email address to reset your passeord</p>
                </div>
                <div className="w-full relative mb-4">
                    <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 focus-visible:ring-1" />
                    <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
                </div>
                {
                    loading ? (
                        <Button className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>Please wait</Button>
                    ) : (
                        <Button className="bg-orange hover:bg-hoverOrange">Send Reset Link</Button>
                    )
                }
                <span className="text-sm">
                    Back to {" "}
                    <Link to='/login' className="text-blue-500 font-medium">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default ForgotPassword;