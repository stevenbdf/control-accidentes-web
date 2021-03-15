import Table from '../components/Table'
import { NavLink } from "react-router-dom";

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
  return (
    <div className="mx-16">
      <div className="text-4xl font-extrabold pt-12">
        Graficos
      </div>
      <div className="flex justify-end mt-16">
        <NavLink to="/AddChart">
          <button className="mr-32 px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300">
            Agregar
          </button>
        </NavLink>
      </div>
      <div className="container mx-auto mt-4">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  )
}
export default Charts;