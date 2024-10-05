import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { LoginInputState, userLoginSchema } from "../schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

// type LoginInputState = {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const {loading, login} = useUserStore();

  const changeEventHabdler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = userLoginSchema.safeParse(input);
    console.log(result);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    console.log(input);
    await login(input);
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
              Login
            </Button>
          )}
          <div className="mt-3">
          <Link to='/forgot-password' className="hover:text-blue-500 font-medium underline">Forgot Password</Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2">
          Do not Have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
