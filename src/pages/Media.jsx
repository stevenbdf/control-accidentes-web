import { useState, useEffect, createRef } from 'react';
import Radio from '@material-ui/core/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera, faVideo, faImages, faUpload, faLink,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '../components/Modal';
import { show, update } from '../store/config/actions';
import FilesModal from '../components/FilesModal';
import { store } from '../store/files/actions';

const Media = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.config.isLoading);
  const config = useSelector((state) => state.config.config);
  const [fileName] = useState('Selecciona un archivo');
  const [selectedValue, setSelectedValue] = useState();
  const [open, setOpen] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [url, setUrl] = useState('');
  const uploadInput = createRef();

  const handleChange = (value) => {
    if (!isLoading) {
      setSelectedValue(value);
      dispatch(update({ id: 1, body: { media_id: value } }));
    }
  };

  const handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    dispatch(store(formData));
  };

  const handleUploadURL = () => {
    dispatch(store({ url }));
  };

  useEffect(() => {
    dispatch(show({ id: 1 }));
  }, []);

  useEffect(() => {
    if (config?.id) {
      setSelectedValue(config.media_id);
    }
  }, [config]);

  return (
    <div className="mx-16">
      <Modal open={open} setOpen={setOpen}>
        <h3 className="font-bold text-2xl mb-5">Subir URL</h3>
        <div className="flex items-center mb-5">
          <div className="mr-5">URL:</div>
          <input
            value={url}
            onChange={({ target: { value } }) => setUrl(value)}
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg"
            type="text"
            placeholder="Ingrese una URL..."
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-green-400 px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none"
            onClick={() => {
              setOpen(false);
              handleUploadURL();
            }}
          >
            Aceptar

          </button>
        </div>
      </Modal>
      <Modal open={showFilesModal} setOpen={setShowFilesModal}>
        <FilesModal
          mediaId={config?.media?.id}
          mediaFiles={config?.media?.files}
          filesLimit={config?.media_id === '1'}
          closeModal={() => setShowFilesModal(false)}
        />
      </Modal>
      <div className="text-4xl font-extrabold pt-6">
        Multimedia
      </div>
      <div className="w-full border-2 border-blue-400 mt-10 rounded-lg">
        <div className="text-xl pl-12 pt-4 font-bold">
          Selecciona el tipo de multimedia a mostrar
        </div>
        <div className="flex w-full mt-8">
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === '1'}
              disabled={isLoading}
              onChange={({ target: { value } }) => handleChange(value)}
              value="1"
              name="radio-button-demo"
              inputProps={{ 'aria-label': '1' }}
            />
            <FontAwesomeIcon
              onClick={() => handleChange('1')}
              className={`${isLoading ? 'text-gray-600' : ''} cursor-pointer text-9xl`}
              icon={faCamera}
            />
            <div className={`${isLoading ? 'text-gray-600' : ''} pt-4 font-bold text-xl`}>Imagen individual</div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === '2'}
              disabled={isLoading}
              onChange={({ target: { value } }) => handleChange(value)}
              value="2"
              name="radio-button-demo"
              inputProps={{ 'aria-label': '2' }}
            />
            <FontAwesomeIcon
              onClick={() => handleChange('2')}
              className={`${isLoading ? 'text-gray-600' : ''} cursor-pointer text-9xl`}
              icon={faVideo}
            />
            <div className={`${isLoading ? 'text-gray-600' : ''} pt-4 font-bold text-xl`}>Video</div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === '3'}
              disabled={isLoading}
              onChange={({ target: { value } }) => handleChange(value)}
              value="3"
              name="radio-button-demo"
              inputProps={{ 'aria-label': '3' }}
            />
            <FontAwesomeIcon
              onClick={() => handleChange('3')}
              className={`${isLoading ? 'text-gray-600' : ''} cursor-pointer text-9xl`}
              icon={faImages}
            />
            <div className={`${isLoading ? 'text-gray-600' : ''} pt-4 font-bold text-xl`}>Caroussel</div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          {
            isLoading
              ? <CircularProgress />
              : (
                <button
                  type="button"
                  disabled={isLoading}
                  className="bg-eastern-blue-500 text-xl rounded-lg font-bold
          text-white focus:outline-none hover:bg-eastern-blue-800
            transition-colors duration-300 px-6 py-3"
                  onClick={() => setShowFilesModal(true)}
                >
                  Seleccionar Multimedia
                </button>
              )
          }
        </div>
      </div>
      <div className="w-full border-2 border-blue-400 mt-10 rounded-lg mb-12">
        <div className="text-xl pl-12 pt-4 font-bold">
          Almacenar archivos (fotos, videos)
        </div>
        <div className="flex justify-center ">
          <div className="w-6/12 border-2 md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-8/12 border-blue-400 mt-10 mb-8 rounded-lg flex divide-x-4 divide-solid divide-black">
            <div className="w-1/2 flex flex-col items-center my-10">
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => { uploadInput.current.click(); }}
              >
                <FontAwesomeIcon className="text-8xl " icon={faUpload} />
              </button>
              <div className=" mt-4 font-bold text-xl">
                <input
                  ref={uploadInput}
                  onChange={handleFileUpload}
                  type="file"
                  style={{ display: 'none' }}
                // multiple={false}
                />
                {fileName || 'Subir archivo'}
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center my-10">
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => {
                  setUrl('');
                  setOpen(true);
                }}
              >
                <FontAwesomeIcon className="text-8xl" icon={faLink} />
              </button>
              <div className="text-xl mt-4 font-bold">
                Subir desde URL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
