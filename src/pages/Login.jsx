const Login = () => {
  return (
    <div className=" flex justify-center items-center">
      <form className=" w-4/12 border-4 border-eastern-blue-500 rounded-2xl flex flex-col mt-20 py-28 bg-top bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80')` }} >
        <div className="flex justify-center text-4xl font-semibold -mt-16 mb-16">
          Name Company
        </div>
        <div className="flex justify-center text-4xl font-semibold mb-20">
          Logo
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
          <button className="mt-16 w-96 bg-blue-600 hover:bg-blue-400 text-white transition-colors duration-300 hover:text-black px-8 focus:outline-none py-3 rounded-lg">
            Ingresar
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default Login;