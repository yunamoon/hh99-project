import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-20 hidden sm:block cursor-pointer" />
        <div className="flex gap-4">
          <Link to="/auth">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm text-sm">
              Login
            </button>
          </Link>
          <Link to="/auth">
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-sm text-sm">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
