import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faChartBar, faCog, faImage, faPowerOff, faUser, faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { logout } from '../store/user/actions';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-3 navbar-expand-lg bg-eastern-blue-500 pb-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
            <NavLink to="/">
              <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white">
                Control de accidentes
              </div>
            </NavLink>
            <button
              type="button"
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border
              border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              `xl:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col xl:flex-row list-none xl:ml-auto xl:space-x-6">
              <NavLink to="/configuration" activeClassName="bg-eastern-blue-400" className="rounded">
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faCog} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Configuraciones</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/media" activeClassName="bg-eastern-blue-400" className="rounded">
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faImage} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Multimedia</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/charts" activeClassName="bg-eastern-blue-400" className="rounded">
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faChartBar} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Graficas</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/users" activeClassName="bg-eastern-blue-400" className="rounded">
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faUsers} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Usuarios</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/account" activeClassName="bg-eastern-blue-400" className="rounded">
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faUser} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Cuenta</span>
                  </div>
                </li>
              </NavLink>
              <button type="button" className="focus:outline-none" onClick={logout}>
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-white rounded hover:bg-eastern-blue-400">
                    <FontAwesomeIcon icon={faPowerOff} />
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Cerrar Sesion</span>
                  </div>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
