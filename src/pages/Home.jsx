const Home = () => {
  return (
    <div className="flex space-x-2 mx-8">
      <div className="w-6/12 h-120 border-2 border-gray-300 mt-12 flex flex-col items-center rounded-lg">
        <div className="text-5xl font-semibold mt-8">Viernes, 5 de marzo de 2021</div>
        <div className="text-2xl mt-8">Actividad Eventos 2021</div>
        <div className="text-9xl font-bold my-16">63</div>
        <div className="text-4xl font-semibold mb-8">Desde 1/1/2021</div>
      </div>
      <div className="w-6/12 h-auto border-2 border-gray-300 mt-12 flex flex-col rounded-lg">
        <div className="mb-1">
          <img className="rounded-lg w-full h-96" src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt=""/>
        </div>
        <div>
          <img className="rounded-lg w-full h-96" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
        </div>
      </div>
    </div>
    
  )
}

export default Home;