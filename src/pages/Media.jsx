import React from 'react';
import Radio from '@material-ui/core/Radio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera, faVideo, faImages, faUpload, faLink,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';

const Media = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [fileName, setFileName] = React.useState('No ha seleccionado ningun archivo');
  const uploadInput = React.createRef();

  const handleFileUpload = (event) => {
    setFileName(event.target.files[0].name);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className="mx-16">
      <Modal open={open} setOpen={setOpen}>
        <h3 className="font-bold text-2xl mb-5">Subir URL</h3>
        <div className="flex items-center mb-5">
          <div className="mr-5">URL:</div>
          <input className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg" type="text" placeholder="Ingrese una URL..." />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-green-400 px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none"
            onClick={() => {
              setOpen(false);
            }}
          >
            Aceptar

          </button>
        </div>
      </Modal>
      <div className="text-4xl font-extrabold pt-6">
        Multimedia
      </div>
      <div className="w-full border-2 border-blue-400 mt-10 rounded-lg">
        <div className="flex w-full mt-8">
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            <FontAwesomeIcon className=" text-9xl" icon={faCamera} />
            <div className="pt-4 font-bold text-xl">Imagen individual</div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            />
            <FontAwesomeIcon className=" text-9xl" icon={faVideo} />
            <div className="pt-4 font-bold text-xl">Video</div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <Radio
              checked={selectedValue === 'c'}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            />
            <FontAwesomeIcon className=" text-9xl" icon={faImages} />
            <div className="pt-4 font-bold text-xl">Caroussel</div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button
            type="button"
            className="bg-eastern-blue-400 text-2xl rounded-lg font-bold
          text-white focus:outline-none hover:bg-eastern-blue-800
            transition-colors duration-300 px-6 py-3"
          >
            Seleccionar Multimedia
          </button>
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
