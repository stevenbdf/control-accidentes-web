import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const Account = () => {
  return (
    <div className="mx-16">
      <div className="text-4xl font-extrabold pt-12 mb-10">
        Cuenta
      </div>
      <div className="border-2 border-blue-500 rounded-lg py-8 space-y-8 mb-8">
        <div className="text-xl pl-12 pt-2 font-bold">
          Informacion general
        </div>
        <div className="flex justify-around">
          <div>
            <div className=" text-lg font-semibold mb-2">
              Nombre:
          </div>
            <div>
              <input className=" disabled:opacity-5 py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none" type="text" placeholder="Jhon Doe"  disabled/>
            </div>
          </div>
          <div>
            <div className=" text-lg font-semibold mb-2">
              Usuario:
          </div>
            <div>
              <input className=" disabled:opacity-5 py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none" type="text" placeholder="Usurio del usuario xd" disabled/>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-500 rounded-lg py-8 space-y-8 ">
        <div className="text-xl pl-12 pt-2 font-bold">
          Cambiar contraseña
        </div>
        <div className="flex justify-around">
          <div >
            <div className=" text-lg font-semibold mb-2">
              Nueva contraseña:
          </div>
            <div>
              <input className="py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none" type="password" placeholder="*************" />
            </div>
          </div>
          <div >
            <div className=" text-lg font-semibold mb-2">
              Repita la nueva contraseña:
          </div>
            <div>
              <input className="py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none" type="password" placeholder="************" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button className="px-4 py-2 bg-eastern-blue-500 rounded-lg focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 ">
            <FontAwesomeIcon icon={faSave} className="mr-2" /> Guardar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account;