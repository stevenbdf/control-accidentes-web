import Table from '../components/Table'
import { NavLink } from "react-router-dom";


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
        <Table />
      </div>
    </div>
  )
}
export default Charts;