import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../ui/Button";
import Input from "../ui/Input";
import {
  type TSignupValidator,
  type TLoginValidator,
  LoginValidator,
  SignupValidator,
  TAuthValidator,
} from "../Lib/Validators/AuthValidator";

import SignupImage from "../../Images/SignupImage.png";
import LoginImage from "../../Images/LoginImage.png";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  function LoginModeHandler() {
    setIsLoginMode(!isLoginMode);
  }

  const currentMode = isLoginMode ? LoginValidator : SignupValidator;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthValidator>({
    resolver: zodResolver(currentMode),
  });

  const onSubmit: SubmitHandler<TAuthValidator> = async (data, event) => {
    event?.preventDefault();
    console.log("test inside Submition");
    if (isLoginMode) {
      const loginData = data as TLoginValidator;
      console.log("Login data:", loginData);
    } else {
      const signupData = data as TSignupValidator;
      console.log("Signup data:", signupData);
    }
  };

  return (
    <div className="lg:p-10 w-full flex flex-row items-center justify-center">
      <div className="hidden lg:flex md:items-center md:justify-center lg:w-xl">
        {isLoginMode ? (
          <img src={LoginImage} alt="SignupImage" className="w-90 h-90" />
        ) : (
          <img src={SignupImage} alt="SignupImage" className="w-90 h-90" />
        )}
      </div>
      <div className="w-[28rem] p-10 md:p-2 flex flex-col justify-center items-center lg:w-[32rem]">
        <div className="text-center mt-2 mb-10">
          <h1
            // onClick={() => navigate("/")}
            className=" poetsen-one-regular text-purple-900 text-4xl"
          >
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
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center"
        >
          {!isLoginMode && (
            <Input
              {...register("fullName")}
              htmlFor="FullName"
              label="Full Name"
              placeholder="Your Full Name"
              type="text"
              //   className={`focus-visible:ring-red-900 ${
              //     errors.email ? "border-red-500" : ""
              //   }`}
              errors={errors.email?.message || ""}
            />
          )}
          <Input
            {...register("email")}
            htmlFor="Email"
            label="Email"
            placeholder="Your Email"
            type="email"
            //   className={`focus-visible:ring-red-900 ${
            //     errors.email ? "border-red-500" : ""
            //   }`}
            errors={errors.email?.message || ""}
          />
          <Input
            {...register("password")}
            htmlFor="Password"
            label="Password"
            placeholder="Your Password"
            type="password"
            errors={errors.password?.message || ""}
            // className=""
          />
          {!isLoginMode && (
            <Input
              {...register("confirmPassword")}
              htmlFor="ConfirmPassword"
              label="Confirm Password"
              placeholder="Your Password Confirmation"
              type="password"
              errors={errors.email?.message || ""}
              //   className=""
            />
          )}
          <div className="w-full mt-4 mb-2">
            <Button
              type="submit"
              className="w-full py-1 text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900 text-lg"
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
  );
};

export default Auth;
