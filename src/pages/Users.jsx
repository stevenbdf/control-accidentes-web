import Table from '../components/Table'

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
          <Table columns={columns} rows={rows} />
      </div>
    </div>
    </div>
  )
}

export default Users;