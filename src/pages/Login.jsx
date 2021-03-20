import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../store/user/actions';
import validator from '../helpers/validator';
import TokenService from '../services/core/TokenService';

const Login = () => {
  const isLoading = useSelector((state) => state.user.isLoading);
  const user = useSelector((state) => state.user.user);

  const {
    register, handleSubmit, errors,
  } = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (!isLoading) {
      dispatch(login(data));
    }
  };

  if (TokenService.getToken() || user?.id) {
    return <Redirect to="/configuration" />;
  }

  return (
    <div className=" flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-4/12 md:w-8/12 lg:w-6/12 xl:w-4/12 border-2 border-eastern-blue-500 rounded-2xl flex flex-col mt-5 py-28 bg-top bg-cover"
      >
        <div className="flex justify-center text-4xl font-semibold -mt-16 mb-16">
          Control de accidentes
        </div>
        <div className="flex justify-center text-4xl font-semibold">
          <FontAwesomeIcon className="text-8xl" icon={faBuilding} />
        </div>
        <div className="flex justify-center items-center flex-col mt-20">
          <div className="mr-2 text-xl font-bold pr-72">Usuario: </div>
          <input
            name="username"
            ref={register({ required: validator.required, maxLength: validator.maxLength(60), pattern: validator.letters })}
            className="pr-36 pl-4 py-2 border-2 w-96 rounded-lg focus:border-blue-900 border-blue-600 focus:outline-none"
            placeholder="Usuario..."
            type="text"
          />
          {errors.username && <p className="my-1 text-red-500">{errors.username.message}</p>}
        </div>
        <div className="flex justify-center items-center flex-col mt-12">
          <div className="mr-2 text-xl font-bold pr-68">Contraseña:</div>
          <input
            name="password"
            ref={register({ required: validator.required, maxLength: validator.maxLength(60), pattern: validator.noEmptySpace })}
            className="pr-36 pl-4 py-2 border-2 w-96 rounded-lg border-blue-600 focus:outline-none"
            placeholder="Contraseña..."
            type="password"
          />
          {errors.password && <p className="my-1 text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex justify-center items-center mt-12">
          <Checkbox
            name="remember"
            defaultChecked
            color="primary"
            inputRef={register}
          />
          <p className="font-semibold pr-68 mr-4">Recuerdame</p>
        </div>
        <div className="flex justify-center">
          {
            isLoading
              ? (
                <div
                  className="mt-16 w-96 flex justify-center"
                >
                  <CircularProgress />
                </div>
              )
              : (
                <button
                  type="submit"
                  className="mt-16 w-96 font-bold bg-eastern-blue-500 text-white transition-colors duration-300 hover:text-black px-8 focus:outline-none py-3 rounded-lg"
                >
                  Ingresar
                </button>
              )
          }
        </div>
        <Link to="/" className="text-center mt-5 text-eastern-blue-700">Regresar a la pagina principal</Link>
      </form>
    </div>
  );
};

export default Login;
