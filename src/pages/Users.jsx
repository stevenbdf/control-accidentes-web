import Table from '../components/Table'
import Modal from '../components/Modal'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';


const columns = [
  {
    id: 'username',
    label: 'Usuario',
    align: 'center',
    minWidth: 170
  },
  {
    id: 'role',
    label: 'Tipo de usuario',
    minWidth: 170,
    align: 'center'
  }
];

const rows = [
  {
    username: 'Carlos',
    role: 'Administrador',
  },
  {
    username: 'Steven',
    role: 'Administrador',
  },
  {
    username: 'Boris',
    role: 'Operador',
  },
  {
    username: 'Jose',
    role: 'Operador',
  },
];

const Users = () => {

  const [open, setOpen] = React.useState(false);
  return (

    <div className="mx-28">
      <Modal open={open} setOpen={setOpen}>
        <h3 className="font-bold text-4xl mb-10">Agregar usuario</h3>
        <div className="mx-8">
          <div className=" mb-10">
            <div className="text-xl font-semibold">
              Nombre:
          </div>
            <div>
              <input className="py-1 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg" type="text" placeholder="Ingrese un nombre de usuario..." />
            </div>
          </div>
          <div className="mb-10">
            <div className=" text-xl mb-2 font-semibold">
              Contraseña:
          </div>
            <div>
              <input className="py-1 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg" type="password" placeholder="*************" />
            </div>
          </div>
          <div className="flex items-center mb-10">
            <div className="text-xl mb-2 font-semibold">
              Tipo de Usuario:
            </div>
            <div className="ml-2">
              <select name="" id="" className="px-8 rounded-lg border-2 border-blue-500 focus:outline-none py-2">
                <option value="1">Administrador</option>
                <option value="2">Operador</option>
                <option value="3">Trabajador</option>
              </select>
            </div>
          </div>
          <div className="flex xl:justify-end md:justify-center">
            <button className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6" onClick={() => {
              setOpen(false)
            }}>Cancelar</button>
            <button className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none" onClick={() => {
              setOpen(false)
            }}>Aceptar</button>
          </div>
        </div>
      </Modal>
      <div className="text-4xl font-extrabold pt-6">
        Usuarios
      </div>
      <div className="flex justify-end mt-16">
        <button className="px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300" onClick={() => {
          setOpen(true)
        }}>
          <FontAwesomeIcon className="mr-2" icon={faPlus}/>
          Agregar
        </button>
      </div>
      <div className="container mx-auto mt-4">
        <Table columns={columns} rows={rows} />
      </div>
    </div>

  )
}

export default Users;