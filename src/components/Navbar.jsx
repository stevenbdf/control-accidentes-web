import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="w-full flex h-16 bg-eastern-blue-500 text-white font-bold justify-between">
      <div className="flex space-x-12 items-center w-1/3 pl-8">
        <NavLink exact to="/configuration" activeClassName="text-2xl">
          <div>
            {/* Icono de fontAwesome : Gear */}
            <p className="mr-3">Configuraciones</p>
          </div>
        </NavLink>
        <NavLink exact to="/media" activeClassName="text-2xl">
          <div>
            {/* Icono de fontAwesome : Media*/}
            <p className="mr-3">Multimedia</p>
          </div>
        </NavLink>
        <NavLink exact to="/charts" activeClassName="text-2xl">
          <div>
            {/* Icono de fontAwesome : Charts */}
            <p className="mr-3">Graficas</p>
          </div>
        </NavLink>
        <NavLink exact to="/users" activeClassName="text-2xl">
          <div>
            {/* Icono de fontAwesome : SomeUsers */}
            <p className="mr-3">Usuarios</p>
          </div>
        </NavLink>
      </div>
      <div className="flex space-x-2 items-center w-1/3 justify-center">
        <NavLink exact to="/" activeClassName="text-2xl">
          <div>
            {/* Icono de fontAwesome : Home */}
            Home
          </div>
        </NavLink>
      </div>
      <div className="flex space-x-8 items-center w-1/3 justify-end pr-8">
        <NavLink exact to="/account">
          <div>
            {/* Icono de fontAwesome : SingleUser */}
            Cuenta
          </div>
        </NavLink>
        <NavLink exact to="/logout">
          <div>
            {/* Icono de fontAwesome : PowerOff */}
            Cerrar Sesion
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;