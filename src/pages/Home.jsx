const Home = () => {
  return (
    <div className="flex space-x-2 mx-8">
      <div className="w-6/12  border-2 border-gray-300 mt-12 flex flex-col justify-center space-y-16 items-center rounded-lg md:w-6/12 md:text-center">
        <div className="text-6xl md:text-3xl lg:text-4xl font-semibold mt-8">Viernes, 5 de marzo de 2021</div>
        <div className="text-3xl md:text-lg lg:text-xl xl:text-2xl mt-8">Actividad Eventos 2021</div>
        <div className="text-9xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-16">63</div>
        <div className="text-5xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Desde 1/1/2021</div>
      </div>
      <div className="w-6/12 h-auto border-2 border-gray-300 mt-12 flex flex-col rounded-lg md:w-6/12" >
        <div className="mb-1">
          <img className="rounded-lg w-full h-96" src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt=""/>
        </div>
        <div className="w-full flex justify-center items-center">
          <img className="rounded-lg h-96" src="/images/chart1.png" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Home;