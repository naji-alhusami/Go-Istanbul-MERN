import Button from "../ui/Button";
import Input from "../ui/Input";
import SignupImage from "../../Images/SignupImage.png";

// type SignupProps = {
//   setIsLoginPage: (open: boolean) => void;
// };

const Signup = () => {
  // function LoginFormHandler() {
  //   setIsLoginPage(true);
  // }

  return (
    <div className="lg:p-10 w-full flex flex-row items-center justify-center">
      <div className="hidden lg:flex md:items-center md:justify-center lg:w-xl">
        <img src={SignupImage} alt="SignupImage" className="w-90 h-90" />
      </div>
      <div className="w-[28rem] p-10 md:p-2 flex flex-col justify-center items-center lg:w-[32rem]">
        <div className="text-center mt-2 mb-10">
          <h1
            // onClick={() => navigate("/")}
            className=" poetsen-one-regular text-purple-900 text-4xl"
          >
            Go World
          </h1>
          <p className="my-4 text-gray-500 font-bold">
            Join now to upload private albums and showcase the stunning cities
            you explore. Help others discover the best spots while keeping your
            personal memories safe.
          </p>
        </div>
        <form className="w-full flex flex-col justify-center items-center">
          <Input
            htmlFor="FullName"
            label="Full Name"
            placeholder="Your Full Name"
            type="text"
          />
          <Input
            htmlFor="Email"
            label="Email"
            placeholder="Your Email"
            type="email"
          />
          <Input
            htmlFor="Password"
            label="Password"
            placeholder="Your Password"
            type="password"
          />
          <Input
            htmlFor="ConfirmPassword"
            label="Confirm Password"
            placeholder="Your Password Confirmation"
            type="password"
          />
          <div className="w-full mt-4 mb-2">
            <Button
              type="submit"
              className="w-full py-1 text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900 text-lg"
            >
              Signup
            </Button>
          </div>
          <div className="flex items-center my-4 w-full">
            <div className="h-px flex-grow bg-gray-300" />
            <span className="mx-4 text-gray-500 font-bold">OR</span>
            <div className="h-px flex-grow bg-gray-300" />
          </div>
          <div className="w-full mt-2 flex flex-row justify-center items-center">
            <p className="w-full mx-2 text-gray-500 font-bold">Already Have An Account?</p>
            <Button
              type="button"
              // onClick={LoginFormHandler}
              className="w-full py-1 text-purple-900 border border-purple-900 rounded-md cursor-pointer hover:bg-purple-700 hover:text-white text-lg"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
