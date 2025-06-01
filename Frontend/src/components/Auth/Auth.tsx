import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Navbar from "../Navbar/Navbar";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
  LoginValidator,
  SignupValidator,
  TLoginValidator,
  TSignupValidator,
} from "../Lib/Validators/AuthValidator";

import SignupImage from "../../Images/SignupImage.png";
import LoginImage from "../../Images/LoginImage.png";
import StateContext from "../store/context/state-context";

const Auth = () => {
  const { isLoginMode, setIsLoginMode } = useContext(StateContext) as {
    isLoginMode: boolean;
    setIsLoginMode: (mode: boolean) => void;
  };

  const loginForm = useForm<TLoginValidator>({
    resolver: zodResolver(LoginValidator),
    // mode: "onChange",
  });

  const signupForm = useForm<TSignupValidator>({
    resolver: zodResolver(SignupValidator),
    // mode: "onChange",
  });

  const LoginModeHandler = () => {
    setIsLoginMode(!isLoginMode);
    // loginForm.reset();
    // signupForm.reset();
  };

  const handleLoginSubmit: SubmitHandler<TLoginValidator> = (data) => {
    console.log("Login data:", data);
  };

  const handleSignupSubmit: SubmitHandler<TSignupValidator> = (data) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" w-full flex flex-row items-center justify-center lg:p-10">
        <div className="hidden lg:flex md:items-center md:justify-center lg:w-xl">
          {isLoginMode ? (
            <img src={LoginImage} alt="Login" className="w-90 h-90" />
          ) : (
            <img src={SignupImage} alt="Signup" className="w-90 h-90" />
          )}
        </div>

        <div className="w-[28rem] p-10 md:p-2 flex flex-col justify-center items-center lg:w-[32rem]">
          <div className="text-center mt-2 mb-10">
            <h1 className="poetsen-one-regular text-purple-900 text-4xl">
              Go World
            </h1>
            <h1 className="text-red-500 text-2xl font-bold">
              {isLoginMode ? "(Login)" : "(Signup)"}
            </h1>
            <p className="my-4 text-gray-500 font-bold">
              {isLoginMode
                ? "Log in to continue sharing and discovering the world’s most beautiful places."
                : "Join now to upload private albums and showcase the stunning cities you explore. Help others discover the best spots while keeping your personal memories safe."}
            </p>
          </div>

          <form
            onSubmit={
              isLoginMode
                ? loginForm.handleSubmit(handleLoginSubmit)
                : signupForm.handleSubmit(handleSignupSubmit)
            }
            className="w-full flex flex-col justify-center items-center"
          >
            {!isLoginMode && (
              <Input
                {...signupForm.register("fullName")}
                htmlFor="FullName"
                label="Full Name"
                placeholder="Your Full Name"
                type="text"
                errors={signupForm.formState.errors.fullName?.message || ""}
              />
            )}

            <Input
              {...(isLoginMode
                ? loginForm.register("email")
                : signupForm.register("email"))}
              htmlFor="Email"
              label="Email"
              placeholder="Your Email"
              type="email"
              errors={
                (isLoginMode
                  ? loginForm.formState.errors.email
                  : signupForm.formState.errors.email
                )?.message || ""
              }
            />

            <Input
              {...(isLoginMode
                ? loginForm.register("password")
                : signupForm.register("password"))}
              htmlFor="Password"
              label="Password"
              placeholder="Your Password"
              type="password"
              errors={
                (isLoginMode
                  ? loginForm.formState.errors.password
                  : signupForm.formState.errors.password
                )?.message || ""
              }
            />

            {!isLoginMode && (
              <Input
                {...signupForm.register("confirmPassword")}
                htmlFor="ConfirmPassword"
                label="Confirm Password"
                placeholder="Your Password Confirmation"
                type="password"
                errors={
                  signupForm.formState.errors.confirmPassword?.message || ""
                }
              />
            )}

            <div className="w-full mt-4 mb-2">
              <Button
                type="submit"
                disabled={
                  isLoginMode
                    ? !loginForm.formState.isValid
                    : !signupForm.formState.isValid
                }
                className={`w-full py-1 text-white border rounded-md  text-lg
                        ${
                          isLoginMode
                            ? "bg-purple-700 hover:bg-purple-900"
                            : "bg-purple-700 hover:bg-purple-900"
                        }
                        ${
                          isLoginMode
                            ? !loginForm.formState.isValid
                              ? "opacity-50 cursor-not-allowed"
                              : "cursor-pointer"
                            : !signupForm.formState.isValid
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
              >
                {isLoginMode ? "Login" : "Signup"}
              </Button>
            </div>

            <div className="flex items-center my-4 w-full">
              <div className="h-px flex-grow bg-gray-300" />
              <span className="mx-4 text-gray-500 font-bold">OR</span>
              <div className="h-px flex-grow bg-gray-300" />
            </div>

            <div className="w-full mt-2 flex flex-row justify-center items-center">
              <p className="w-full mx-2 text-gray-500 font-bold">
                {isLoginMode
                  ? "Don't Have An Account?"
                  : "Already Have An Account?"}
              </p>
              <Button
                type="button"
                onClick={LoginModeHandler}
                className="w-full py-1 text-purple-900 border border-purple-900 rounded-md cursor-pointer hover:bg-purple-700 hover:text-white text-lg"
              >
                {isLoginMode ? "Signup" : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
