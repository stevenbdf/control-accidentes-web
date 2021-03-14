import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'



const Buttons = ({showEye}) => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="bg-red-500 w-10 h-10 rounded-xl text-white focus:outline-none font-bold">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="bg-yellow-500 w-10 h-10 rounded-xl text-black focus:outline-none font-bold">
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      {
      showEye &&
      <button className="bg-blue-500 w-10 h-10 rounded-xl text-white focus:outline-none font-bold">
        <FontAwesomeIcon icon={faEye} />
      </button> 
      }
    </div>
  )
}

Buttons.propTypes = {
  showEye: PropTypes.bool
}

Buttons.defaultProps = {
  showEye: false
}

export default Buttons;