import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState<string>('');
    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col mb:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-2">Reset Password</h1>
                    <p className="text-sm text-gray-600 mb-2">Enter your new password to reset old one</p>
                </div>
                <div className="w-full relative mb-4">
                    <Input
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 focus-visible:ring-1" />
                    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
                </div>
                {
                    loading ? (
                        <Button className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>Please wait</Button>
                    ) : (
                        <Button className="bg-orange hover:bg-hoverOrange">Reset</Button>
                    )
                }
                <span className="text-sm text-center mt-3">
                    Back to {" "}
                    <Link to='/login' className="text-blue-500 font-medium">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default ResetPassword;