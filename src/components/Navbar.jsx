import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex h-16 bg-blue-500 text-white font-bold">
      <NavLink exact to="/" activeClassName="text-2xl">
        <p className="mr-3">Home</p>
      </NavLink>
      <NavLink exact to="/login" activeClassName="text-2xl">
        <p className="mr-3">Login</p>
      </NavLink>
    </div>
  );
}

export default Navbar;