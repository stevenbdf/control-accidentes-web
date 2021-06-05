import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage, faVideo, faLink, faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { fetch, destroy } from '../store/files/actions';
import { attachFilesToMedia } from '../store/config/actions';
import { fireToast } from '../helpers/utilities';

const FilesModal = ({
  mediaId, mediaFiles, filesLimit, closeModal,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.files.isLoading);
  const files = useSelector((state) => state.files.files);
  const [selectedFiles, setSelectedFiles] = useState([...mediaFiles]);
  useEffect(() => {
    dispatch(fetch());
  }, []);

  const mustBeChecked = (id) => Boolean(selectedFiles.find((item) => item.id === id));

  const handleChange = (id) => {
    let tempFiles = selectedFiles;
    const currentIndex = tempFiles.findIndex((item) => item.id === id);

    if (currentIndex !== -1) {
      tempFiles.splice(currentIndex, 1);
    } else {
      if (tempFiles.length && filesLimit) {
        tempFiles = [];
      }
      tempFiles.push(files.find((item) => item.id === id));
    }

    setSelectedFiles([...tempFiles]);
  };

  const handleClick = () => {
    if (selectedFiles.length) {
      dispatch(attachFilesToMedia({
        id: mediaId,
        body: {
          files: selectedFiles.map((item) => item.id),
        },
      }));
      closeModal();
    } else {
      fireToast('error', 'Selecciona al menos un archivo.');
    }
  };

  const handleDelete = (id) => {
    dispatch(destroy({ id }));
  };

  const renderResources = () => {
    const filteredFiles = files.filter((file) => {
      switch (mediaId) {
        case 1:
        case 3:
          return file.content_type.startsWith('image');
        case 2:
          return file.content_type.startsWith('video');
        default:
          return false;
      }
    });

    return filteredFiles.map((file) => (
      <div className="flex items-center justify-between">
        <FormControlLabel
          key={file.id}
          checked={mustBeChecked(file.id)}
          onChange={() => handleChange(file.id)}
          control={<Checkbox name={file.name} />}
          label={(
            <div>
              {
                file.content_type.startsWith('image')
                && <FontAwesomeIcon className="mr-3" icon={faImage} />
              }
              {
                file.content_type.startsWith('video')
                && <FontAwesomeIcon className="mr-3" icon={faVideo} />
              }
              {
                file.content_type.startsWith('url')
                && <FontAwesomeIcon className="mr-3" icon={faLink} />
              }
              {file.name}
            </div>
          )}
        />
        <FontAwesomeIcon className="text-red-500 mr-3 cursor-pointer" onClick={() => handleDelete(file.id)} icon={faTrash} />
      </div>
    ));
  };

  return (
    <>
      <h3 className="font-bold text-2xl mb-5">Selecciona archivos</h3>
      {
        isLoading
        && (
          <div style={{ height: '50vh' }} className="w-full flex justify-center items-center">
            <CircularProgress />
          </div>
        )
      }
      {
        !!files.length && !isLoading
        && (

          <div style={{ height: '50vh' }} className="overflow-y-auto mb-5 flex flex-col">
            {
              renderResources()
            }
          </div>
        )
      }
      <div className="flex xl:justify-end md:justify-center">
        <button
          type="button"
          className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none"
          onClick={handleClick}
        >
          Aceptar
        </button>
      </div>
    </>
  );
};

FilesModal.propTypes = {
  mediaFiles: PropTypes.instanceOf(Array).isRequired,
  filesLimit: PropTypes.bool.isRequired,
  mediaId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default FilesModal;
