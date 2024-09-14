import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('');
    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col mb:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-2">Forgot Password</h1>
                    <p className="text-sm text-gray-600">Enter your email address to reset your passeord</p>
                </div>
                <div className="w-full relative">
                    <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 focus-visible:ring-1" />
                    <Mail className="absolute inset-2 text-gray-600 pointer-events-none" />
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;