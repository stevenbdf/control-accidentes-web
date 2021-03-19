import { NavLink } from 'react-router-dom';

const NavOut = () => (
  <div className="w-full flex h-16 bg-blue-500 text-white font-bold justify-between">
    <div className="flex space-x-12 items-center w-1/3 pl-8">
      <NavLink exact to="/login" activeClassName="text-2xl">
        <div>
          <p className="mr-3">Control de accidentes</p>
        </div>
      </NavLink>
    </div>
  </div>
);

export default NavOut;
