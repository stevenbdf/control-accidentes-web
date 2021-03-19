import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import Modal from '../components/Modal';
import Table from '../components/Table';
import {
  fetch, store, update, destroy,
} from '../store/chartDatas/actions';
import validator from '../helpers/validator';

const columns = [
  {
    id: 'x_value',
    label: 'Clave',
    align: 'center',
    minWidth: 170,
  },
  {
    id: 'y_value',
    label: 'Valor',
    align: 'center',
    minWidth: 170,
  },
  {
    id: 'color',
    label: 'Color',
    align: 'center',
    minWidth: 170,
  },
];

const ChartDatas = ({ chart }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.chartDatas.isLoading);
  const chartDatas = useSelector((state) => state.chartDatas.chartDatas);
  const [open, setOpen] = useState(false);
  const [chartData, setChartData] = useState({});
  const [color, setColor] = useState('#ffffff');
  const {
    register, handleSubmit, errors,
  } = useForm({
    mode: 'onChange',
  });
  const { id: chartId } = useParams();

  useEffect(() => {
    dispatch(fetch(chartId));
  }, []);

  const onSubmit = (data) => {
    if (chartData?.id) {
      dispatch(update({
        ...data, id: chartData.id, color, chartId,
      }));
    } else {
      dispatch(store({ ...data, color, id: chartId }));
    }
    setColor('#ffffff');
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroy({ id, chartId }));
  };

  const handleEdit = (id) => {
    const currentChartData = chartDatas.find((item) => item.id === id);
    setChartData(currentChartData);
    setColor(currentChartData.color);
    setOpen(true);
  };

  return (
    // Contenedor
    <div className="mx-28">
      {/* Modal */}
      <Modal closeCallback={() => { setColor('#ffffff'); setChartData({}); }} open={open} setOpen={setOpen}>
        <h3 className="font-bold text-4xl mb-10">
          {chartData?.id ? 'Modificar' : 'Agregar'}
          {' '}
          Grafico
        </h3>
        <form className="mx-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            <div className=" text-xl font-semibold mb-2">
              Clave:
            </div>
            <div>
              <input
                name="x_value"
                ref={register({ required: validator.required })}
                defaultValue={chartData.x_value}
                className="py-2 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg"
                type="text"
                placeholder="Ingrese un valor"
              />
              {errors.x_value && <p className="my-1 text-red-500">{errors.x_value.message}</p>}
            </div>
          </div>
          <div className="mb-10">
            <div className=" text-xl font-semibold mb-2">
              Valor:
            </div>
            <div>
              <input
                name="y_value"
                ref={register({ required: validator.required })}
                defaultValue={chartData.y_value}
                className="py-2 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg"
                type="text"
                placeholder="Ingrese un valor"
              />
              {errors.y_value && <p className="my-1 text-red-500">{errors.y_value.message}</p>}
            </div>
          </div>
          <div className="mb-10">
            <div className=" text-xl font-semibold mb-2">
              Color:
            </div>
            <div className="w-full flex justify-center">
              <SketchPicker color={color} onChangeComplete={({ hex }) => setColor(hex)} />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6"
              onClick={() => {
                setColor('#ffffff');
                setChartData({});
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
        Grafica :
        {' '}
        <span className="font-semibold">
          {chart.name}
        </span>
      </div>

      {/* Boton que despliega el modal */}
      <div className="flex justify-end mt-16">
        <button
          type="button"
          className=" px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300"
          onClick={() => {
            setChartData({});
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
          rows={chartDatas}
          deleteButtonCallback={handleDelete}
          editButtonCallback={handleEdit}
        />
      </div>
    </div>
  );
};

ChartDatas.propTypes = {
  chart: PropTypes.instanceOf(Object).isRequired,
};

export default ChartDatas;
