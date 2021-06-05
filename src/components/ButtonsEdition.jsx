import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Buttons = ({
  showEye, editOnClick, deleteOnClick, eyeOnClick,
}) => (
  <div className="flex justify-center space-x-3">
    {
      showEye
      && (
        <button
          type="button"
          className="bg-blue-500 w-10 h-10 rounded-xl text-white focus:outline-none font-bold"
          onClick={eyeOnClick}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      )
    }
    <button
      type="button"
      className="bg-yellow-500 w-10 h-10 rounded-xl text-black focus:outline-none font-bold"
      onClick={editOnClick}
    >
      <FontAwesomeIcon icon={faPencilAlt} />
    </button>
    <button
      type="button"
      className="bg-red-500 w-10 h-10 rounded-xl text-white focus:outline-none font-bold"
      onClick={deleteOnClick}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);

Buttons.propTypes = {
  showEye: PropTypes.bool,
  editOnClick: PropTypes.func.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
  eyeOnClick: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  showEye: false,
};

export default Buttons;
