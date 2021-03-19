import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal';
import Table from '../components/Table';
import {
  fetch, store, update, destroy,
} from '../store/charts/actions';
import { getChartName } from '../helpers/utilities';
import validator from '../helpers/validator';

const columns = [
  {
    id: 'name',
    label: 'Titulo',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'type',
    label: 'Tipo de grafico',
    align: 'center',
    minWidth: 170,
  },
];

const Charts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.charts.isLoading);
  const charts = useSelector((state) => state.charts.charts);
  const [open, setOpen] = useState(false);
  const [chart, setChart] = useState({});
  const {
    register, handleSubmit, errors,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const onSubmit = (data) => {
    if (chart?.id) {
      dispatch(update({ ...data, id: chart.id }));
    } else {
      dispatch(store(data));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroy({ id }));
  };

  const handleEdit = (id) => {
    setChart(charts.find((item) => item.id === id));
    setOpen(true);
  };

  return (
    // Contenedor
    <div className="mx-28">

      {/* Modal */}
      <Modal closeCallback={() => { setChart({}); }} open={open} setOpen={setOpen}>
        <h3 className="font-bold text-4xl mb-10">
          {chart?.id ? 'Modificar' : 'Agregar'}
          {' '}
          Grafico
        </h3>
        <form className="mx-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            <div className=" text-xl font-semibold mb-2">
              Nombre:
            </div>
            <div>
              <input
                name="name"
                ref={register({ required: validator.required })}
                defaultValue={chart.name}
                className="py-2 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg"
                type="text"
                placeholder="Ingrese un titulo..."
              />
              {errors.name && <p className="my-1 text-red-500">{errors.name.message}</p>}
            </div>
          </div>
          <div className="mb-10">
            <div className="text-xl mb-2 font-semibold">
              Tipo de grafico:
            </div>
            <div>
              <select
                name="type"
                ref={register({ required: validator.required })}
                defaultValue={chart.type}
                className="px-2 rounded-lg border-2 border-blue-500 w-full focus:outline-none py-2"
              >
                <option value="line">Linear</option>
                <option value="bar">Barra</option>
                <option value="pie">Pastel</option>
                <option value="doughnut">Dona</option>
                <option value="polar">Polar</option>
              </select>
              {errors.type && <p className="my-1 text-red-500">{errors.type.message}</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6"
              onClick={() => {
                setChart({});
                setOpen(false);
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none"
            >
              Aceptar
            </button>
          </div>
        </form>
      </Modal>

      {/* Titulo */}
      <div className="text-4xl font-extrabold pt-6">
        Graficos
      </div>

      {/* Boton que despliega el modal */}
      <div className="flex justify-end mt-16">
        <button
          type="button"
          className=" px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Agregar
        </button>
      </div>

      {/* Tabla de Graficos */}
      <div className="container mx-auto mt-4">
        {
          isLoading
          && <LinearProgress />
        }
        <Table
          columns={columns}
          rows={charts.map((item) => ({ ...item, type: getChartName(item.type) }))}
          showEye
          deleteButtonCallback={handleDelete}
          editButtonCallback={handleEdit}
        />
      </div>
    </div>
  );
};
export default Charts;
