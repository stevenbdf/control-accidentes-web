import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <div className=" flex justify-center items-center">
      <form className=" w-4/12 md:w-8/12 lg:w-6/12 xl:w-4/12 border-2 border-eastern-blue-500 rounded-2xl flex flex-col mt-20 py-28 bg-top bg-cover" >
        <div className="flex justify-center text-4xl font-semibold -mt-16 mb-16">
          Control de accidentes
        </div>
        <div className="flex justify-center text-4xl font-semibold">
          <FontAwesomeIcon className="text-8xl" icon={faBuilding} />
        </div>
        <div className="flex justify-center items-center flex-col mt-20">
          <div className="mr-2 text-xl font-bold pr-72">Usuario: </div>
          <input className="pr-36 pl-4 py-2 border-2 w-96 rounded-lg focus:border-blue-900 border-blue-600 focus:outline-none" placeholder="Usuario..." type="text"/>
        </div>
        <div className="flex justify-center items-center flex-col mt-12">
          <div className="mr-2 text-xl font-bold pr-68">Contraseña:</div>
          <input className="pr-36 pl-4 py-2 border-2 w-96 rounded-lg border-blue-600 focus:outline-none" placeholder="Contraseña..." type="text"/>
        </div>
        <div className="flex justify-center">
          <button className="mt-16 w-96 bg-eastern-blue-500 text-white transition-colors duration-300 hover:text-black px-8 focus:outline-none py-3 rounded-lg">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;