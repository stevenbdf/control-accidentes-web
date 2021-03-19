import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@material-ui/core/CircularProgress';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';
import Switch from '../components/Switch';
import { show, update } from '../store/config/actions';

const Config = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.config.isLoading);
  const config = useSelector((state) => state.config.config);
  const [open, setOpen] = useState(false);

  const [checks, setChecks] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  console.log({ isLoading, config });
  useEffect(() => {
    dispatch(show({ id: 1 }));
  }, []);

  useEffect(() => {
    if (config?.id) {
      setChecks({
        checkedA: config.display_main_info,
        checkedB: config.display_media,
        checkedC: config.display_charts,
      });
    }
  }, [config]);

  const handleSectionSave = () => {
    dispatch(update({
      id: 1,
      body: {
        display_main_info: checks.checkedA,
        display_media: checks.checkedB,
        display_charts: checks.checkedC,
      },
    }));
  };

  return (
    <div className="mx-16">
      <Modal open={open} setOpen={setOpen}>
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl mb-10">¿Desea mostrar esta seleccion?</h3>
          <div className="flex items-center mb-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-400 px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancelar

              </button>
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
          </div>
        </div>
      </Modal>
      <div className="text-4xl font-extrabold pt-12">
        Configuraciones
      </div>
      <div className="border-2 border-blue-400 mt-10 space-y-16 rounded-lg">
        <div className="text-2xl pl-12 pt-4 font-bold">
          Secciones a mostrar
        </div>
        <div className="w-full px-56">
          {
            isLoading
              ? (
                <div className="w-full flex justify-center items-center">
                  <CircularProgress />
                </div>
              )
              : <Switch state={checks} setState={setChecks} />
          }
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="button"
            disabled={isLoading}
            className="px-4 py-2 bg-eastern-blue-500  rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 "
            onClick={handleSectionSave}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            {' '}
            Guardar
          </button>
        </div>
      </div>
      <div className="border-2 border-blue-400 mt-16 space-y-8 rounded-lg md:flex md:flex-col mb-12">
        <div className="text-2xl pl-12 pt-4 font-bold">
          Informacion general
        </div>
        <div className="flex items-center pl-12">
          <div className="mr-6 text-lg">Fecha ultimo accidente:</div>
          <input className="border-4 px-4 py-2 border-blue-600 rounded-lg" type="date" />
        </div>
        <div className="xl:flex md:space-y-5 md:px-12 lg:px-12 xl:items-center lg:flex-wrap">
          <div className="flex items-center ">
            <div className="text-lg lg:mr-6 2xl:mr-16">Texto informativo:</div>
            <textarea
              placeholder="Escriba aqui su texto informativo"
              className="xl:-ml-14 xl:mr-10 border-2 px-4 py-2 border-blue-600 rounded-lg"
              name=""
              id=""
              cols="70"
              rows="4"
            />
          </div>
          <div className="flex items-center">
            <div className="text-lg lg:mr-6 2xl:mr-16 2xl:mb-8">Texto marquesina:</div>
            <textarea
              placeholder="Escriba aqui su texto marquesina"
              className="xl:-ml-14 2xl:mb-6  border-2 px-4 py-2 border-blue-600 rounded-lg"
              name=""
              id=""
              cols="70"
              rows="4"
            />
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="button"
            className="px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 "
            onClick={() => {
              setOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            {' '}
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
};

export default Config;
