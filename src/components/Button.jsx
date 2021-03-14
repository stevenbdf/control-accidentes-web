import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
  return (
    <div className="flex justify-end mr-12">
      <button className="px-4 py-2 bg-blue-600 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300">
        <FontAwesomeIcon icon={faSave} className="mr-2" /> Guardar
      </button>
    </div>
  )
}

export default Button;