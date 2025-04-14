import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="bg-white w-full sticky top-0 z-50 shadow font-poppins py-2 px-6">
      <div className="flex flex-row justify-between items-center">
        <div className="poetsen-one-regular text-purple-900 text-2xl">
          <div>Go-World</div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Button
            type="button"
            className="text-purple-900 border border-purple-900 rounded-md cursor-pointer mr-2 hover:bg-purple-700 hover:text-white"
          >
            Login
          </Button>
          <Button
            type="button"
            className="text-white border border-purple-900 rounded-md cursor-pointer bg-purple-700 hover:bg-purple-900"
          >
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
