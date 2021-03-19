import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { TwitterPicker } from 'react-color'

const Account = () => {
  return (
    <div className="mx-16">
      <div className="text-4xl font-extrabold pt-6 mb-10">
        Cuenta
      </div>
      <div className="border-2 border-blue-500 rounded-lg py-8 space-y-8 mb-8">
        <div className="text-xl pl-16 pt-2 font-bold">
          Color de la interfaz
        </div>
        <div className="flex w-full justify-start pl-40 items-center">
          <div className="mb-4">
            <TwitterPicker />
          </div>
        </div>
        <div className="text-xl pl-16 font-bold">
          Color del texto
        </div>
        <div className="flex w-full justify-start pl-40 items-center">
          <div>
            <TwitterPicker />
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