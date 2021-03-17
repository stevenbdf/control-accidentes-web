import Table from '../components/Table'
import React from 'react'
import Modal from '../components/Modal'

const columns = [
  {
    id: 'chartType',
    label: 'Tipo de grafico',
    align: 'center',
    minWidth: 170
  },
  {
    id: 'title',
    label: 'Titulo',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'time',
    label: 'Tiempo',
    minWidth: 170,
    align: 'center'
  }
];

const rows = [
  {
    chartType: 'Pastel',
    title: 'Grafica 1',
    time: 3
  },
  {
    chartType: 'Barras',
    title: 'Grafica 2',
    time: 4
  },
  {
    chartType: 'Dona',
    title: 'Grafica 3',
    time: 5
  },
  {
    chartType: 'Pastel, Dona',
    title: 'Grafica 4',
    time: 8
  },
  {
    chartType: 'Barra, Pastel, Dona',
    title: 'Grafica 5',
    time: 1
  },
  {
    chartType: 'Barra, Pastel, Dona, Pastel2',
    title: 'Grafica 5',
    time: 6
  }
];

const Charts = () => {

  const [open, setOpen] = React.useState(false);
  return (
    // Contenedor
    <div className="mx-28">

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <h3 className="font-bold text-4xl mb-10">Agregar Grafico</h3>
        <div className="mx-8">
          <div className="flex items-center mb-10">
            <div className="text-xl font-semibold">
              Nombre:
          </div>
            <div className="ml-2">
              <input className="py-1 xl:w-96 md:w-40 lg:w-80 px-4 focus:outline-none border-2 border-blue-500 rounded-lg" type="text" placeholder="Ingrese un titulo..." />
            </div>
          </div>
          <div className="flex items-center mb-10">
            <div className="text-xl font-semibold">
              Tipo de grafico:
            </div>
            <div className="ml-2">
              <select name="" id="" className="px-8 rounded-lg border-2 border-blue-500 focus:outline-none py-2">
                <option value="1">Pastel</option>
                <option value="2">Barras</option>
                <option value="3">Lineal</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-red-400 px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6" onClick={() => {
              setOpen(false)
            }}>Cancelar</button>
            <button className="bg-green-400 px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none" onClick={() => {
              setOpen(false)
            }}>Aceptar</button>
          </div>
        </div>
      </Modal>

      {/* Titulo */}
      <div className="text-4xl font-extrabold pt-12">
        Graficos
      </div>

      {/* Boton que despliega el modal */}
      <div className="flex justify-end mt-16">
        <button className=" px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300" onClick={() => {
          setOpen(true)
        }}>
          Agregar
          </button>
      </div>
      
      {/* Tabla de Graficos */}
      <div className="container mx-auto mt-4">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  )
}
export default Charts;