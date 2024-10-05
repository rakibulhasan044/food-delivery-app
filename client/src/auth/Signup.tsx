import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader, LockKeyhole, Mail, PhoneIncoming, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInputState, userSignupSchema } from "../schema/userSchema";
import { useUserStore } from "@/store/useUserStore";


const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const {signup, loading} = useUserStore();
  const navigate = useNavigate();

  const changeEventHabdler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    console.log(input);
    try {
      await signup(input);
      navigate("/verify-email")
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-lg rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl max-w-lg">MojarFood</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label className="flex pb-2">Full Name</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              value={input.fullname}
              onChange={changeEventHabdler}
              className="pl-9 focus-visible:ring-1"
            />
            <User className="absolute inset-y-7 left-2 text-gray-500 cursor-pointer" />
            {errors && (
              <span className="text-sm text-red-500">{errors.fullname}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label className="flex pb-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={changeEventHabdler}
              className="pl-9 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-7 left-2 text-gray-500 cursor-pointer" />
            {errors && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label className="flex pb-2">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={changeEventHabdler}
              className="pl-9 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-7 left-2 text-gray-500 cursor-pointer" />
            {errors && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Label className="flex pb-2">Contact</Label>
            <Input
              type="text"
              name="contact"
              placeholder="Enter your contact"
              value={input.contact}
              onChange={changeEventHabdler}
              className="pl-9 focus-visible:ring-1"
            />
            <PhoneIncoming className="absolute inset-y-7 left-2 text-gray-500 cursor-pointer" />
            {errors && (
              <span className="text-sm text-red-500">{errors.contact}</span>
            )}
          </div>
        </div>
        <div className="mb-8">
          {loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange w-full">
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Plwase wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-orange hover:bg-hoverOrange w-full"
            >
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
