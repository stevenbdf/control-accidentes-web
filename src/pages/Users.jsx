import TableUsers from '../components/TableUsers'

const Users = ()=> {
  return (
    <div>
      <div className="mx-16">
      <div className="text-4xl font-extrabold pt-12">
        Usuarios
      </div>
      <div className="flex justify-end mt-16">
        <button className=" mr-32 px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300">
          Agregar
        </button>
      </div>
      <div className="container mx-auto mt-4">
        <TableUsers />
      </div>
    </div>
    </div>
  )
}

export default Users;