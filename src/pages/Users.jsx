import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal';
import Table from '../components/Table';
import {
  fetch, store, update, destroy,
} from '../store/user/actions';
import validator from '../helpers/validator';

const columns = [
  {
    id: 'username',
    label: 'Usuario',
    align: 'center',
    minWidth: 170,
  },
  {
    id: 'role',
    label: 'Tipo de usuario',
    minWidth: 170,
    align: 'center',
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const users = useSelector((state) => state.user.users);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const {
    register, handleSubmit, errors,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const onSubmit = (data) => {
    if (user?.id) {
      dispatch(update({
        ...data,
        id: user.id,
        password: data.password.trim() !== '' ? data.password : undefined,
        password_confirmation: data.password.trim() !== '' ? data.password : undefined,
      }));
      setUser({});
    } else {
      dispatch(store(data));
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(destroy({ id }));
  };

  const handleEdit = (id) => {
    setUser(users.find((item) => item.id === id));
    setOpen(true);
  };

  return (
    <div className="mx-28">
      <Modal closeCallback={() => { setUser({}); }} open={open} setOpen={setOpen}>
        <h3 className="font-bold text-4xl mb-10">
          {user?.id ? 'Modificar' : 'Agregar'}
          {' '}
          usuario
        </h3>
        <form className="mx-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10">
            <div className="text-xl mb-2 font-semibold">
              Nombre:
            </div>
            <div>
              <input
                name="username"
                defaultValue={user.username}
                ref={register({ required: validator.required })}
                autoComplete="off"
                className="py-2 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg"
                type="text"
                placeholder="Ingrese un nombre de usuario..."
              />
              {errors.username && <p className="my-1 text-red-500">{errors.username.message}</p>}
            </div>
          </div>
          <div className="mb-10">
            <div className="text-xl mb-2 font-semibold">
              Contraseña:
            </div>
            <div>
              <input
                name="password"
                ref={register({ required: user?.id ? false : validator.required, pattern: validator.noEmptySpace })}
                autoComplete="off"
                className="py-2 w-full px-4 focus:outline-none border-2 border-blue-500 rounded-lg"
                type="password"
                placeholder="*************"
              />
              {errors.password && <p className="my-1 text-red-500">{errors.password.message}</p>}
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-10">
            <div className="w-full text-xl mb-2 font-semibold">
              Tipo de Usuario:
            </div>
            <select
              name="role"
              defaultValue={user.role}
              ref={register({ required: validator.required })}
              className="w-full px-2 rounded-lg border-2 border-blue-500 focus:outline-none py-2"
            >
              <option value="admin">Administrador</option>
              <option value="user">Operador</option>
            </select>
            {errors.role && <p className="my-1 text-red-500">{errors.role.message}</p>}
          </div>
          <div className="flex xl:justify-end md:justify-center">
            <button
              type="button"
              className="bg-eastern-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-lg focus:outline-none mr-6"
              onClick={() => {
                setOpen(false);
                setUser({});
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
      <div className="text-4xl font-extrabold pt-6">
        Usuarios
      </div>
      <div className="flex justify-end mt-16">
        <button
          type="button"
          className="px-4 py-2 bg-eastern-blue-500 rounded-lg mb-4 focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Agregar
        </button>
      </div>
      <div className="container mx-auto mt-4">
        {
          isLoading
          && <LinearProgress />
        }
        <Table columns={columns} rows={users} editButtonCallback={handleEdit} deleteButtonCallback={handleDelete} />
      </div>
    </div>

  );
};

export default Users;
