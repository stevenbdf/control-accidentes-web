import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <>
    <NavLink to="/configuration" className="w-full flex justify-end">
      <FontAwesomeIcon className="text-gray-400 text-2xl my-1 mr-4" icon={faCog} />
    </NavLink>
    <div className="flex items-start space-x-2 justify-end pb-5">
      <div className="w-1/2  border-2 border-gray-300 flex flex-col justify-center space-y-16 items-center rounded-lg md:text-center py-8">
        <div className="text-6xl md:text-3xl lg:text-4xl font-semibold">Viernes, 5 de marzo de 2021</div>
        <div className="text-3xl md:text-lg lg:text-xl xl:text-2xl mt-8">Actividad Eventos 2021</div>
        <div className="text-9xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-16">63</div>
        <div className="text-5xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Desde 1/1/2021</div>
      </div>
      <div className="w-1/2 h-auto border-2 border-gray-300 flex flex-col rounded-lg">
        <div className="w-full flex items-center justify-center" style={{ height: '45vh' }}>
          <img
            className="rounded-lg max-h-full"
            src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-center" style={{ height: '45vh' }}>
          <img className="rounded-lg max-h-full" src="/images/chart1.png" alt="" />
        </div>
      </div>
    </div>
    <Marquee speed={75} style={{ height: '5vh', width: '100%' }} className="w-full flex items-center bg-eastern-blue-500 text-white -mt-4 mb-0" gradient={false}>
      <p style={{ width: '100vw' }} className="font-bold xl:text-2xl align-middle">
        Texto Marquesina de Prueba
        Texto Marquesina de Prueba
        Texto Marquesina de Prueba
        Texto Marquesina de Prueba
        Texto Marquesina de Prueba
      </p>
    </Marquee>
  </>
);

export default Home;
