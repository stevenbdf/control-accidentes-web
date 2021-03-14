import Select from '../components/Select'

const AddChart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-4/12 border-4 rounded-xl border-blue-500 mt-40 space-y-20 pt-20 bg-gray-200">
        <div className="ml-12">
          <div className="font-bold text-4xl">
            Agregar grafico
          </div>
        </div>
        <div className="flex ml-28 items-center">
          <div className="font-semibold text-lg mr-2">
            Nombre:
          </div>
          <input className="rounded-lg py-2 px-5 w-80 border-2 border-blue-500 hover:border-blue-700 focus:border-blue-900 focus:outline-none" placeholder="Ingrese el nombre del grafico" type="text"/>
        </div> 
        <div className="flex items-center ml-28">
          <div className="font-semibold text-lg mr-2">
            Tipo de grafico:
          </div>
          <div className="-mt-4" >
            <Select />
          </div>
        </div> 
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300">Cancelar</button>
          <button className="mx-10 px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300">Aceptar</button>
        </div>
        
      </div>
    </div>
  )
}

export default AddChart;