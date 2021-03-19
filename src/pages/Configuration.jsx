import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@material-ui/core/CircularProgress';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal';
import Switch from '../components/Switch';
import { show, update } from '../store/config/actions';
import validator from '../helpers/validator';

const Config = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.config.isLoading);
  const config = useSelector((state) => state.config.config);
  const [open, setOpen] = useState(false);
  const {
    register, handleSubmit, errors,
  } = useForm({
    mode: 'onChange',
  });

  const [checks, setChecks] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

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

  const onSubmit = (data) => {
    dispatch(update({
      id: 1,
      body: {
        ...data,
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
      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-blue-400 mt-16 space-y-8 rounded-lg md:flex md:flex-col mb-12">
        <div className="text-2xl pl-12 pt-4 font-bold">
          Informacion general
        </div>
        {
          isLoading
            ? (
              <div className="w-full flex justify-center items-center h-64">
                <CircularProgress />
              </div>
            )
            : (
              <>
                <div className="flex items-center pl-12">
                  <div className="mr-6 text-lg">Fecha ultimo accidente:</div>
                  <input
                    name="last_accident"
                    defaultValue={config.last_accident}
                    ref={register({ required: validator.required })}
                    className="border-2 px-4 py-2 border-blue-600 rounded-lg"
                    type="date"
                  />
                  {errors.last_accident && <p className="my-1 text-red-500">{errors.last_accident.message}</p>}
                </div>
                <div className="xl:flex md:space-y-5 md:px-12 lg:px-12 xl:items-center lg:flex-wrap">
                  <div className="flex items-center ">
                    <div className="text-lg lg:mr-6 2xl:mr-16">Texto informativo:</div>
                    <div>
                      <textarea
                        ref={register({ required: validator.required })}
                        defaultValue={config.main_info_text}
                        placeholder="Escriba aqui su texto informativo"
                        className="xl:-ml-14 xl:mr-10 border-2 px-4 py-2 border-blue-600 rounded-lg"
                        name="main_info_text"
                        cols="70"
                        rows="4"
                      />
                      {errors.main_info_text && <p className="w-full my-1 xl:-ml-14 text-red-500">{errors.main_info_text.message}</p>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg lg:mr-6 2xl:mr-16 2xl:mb-8">Texto marquesina:</div>
                    <div>
                      <textarea
                        ref={register({ required: validator.required })}
                        defaultValue={config.marquee_text}
                        placeholder="Escriba aqui su texto marquesina"
                        className="xl:-ml-14 2xl:mb-6  border-2 px-4 py-2 border-blue-600 rounded-lg"
                        name="marquee_text"
                        cols="70"
                        rows="4"
                      />
                      {errors.marquee_text && <p className="w-full my-1 xl:-ml-14 text-red-500">{errors.marquee_text.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mr-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 "
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    {' '}
                    Guardar
                  </button>
                </div>
              </>
            )
        }
      </form>
    </div>
  );
};

export default Config;
