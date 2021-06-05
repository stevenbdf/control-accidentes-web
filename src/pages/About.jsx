/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { fireToast } from '../helpers/utilities';

const Account = () => {
  const aboutDescription = localStorage.getItem('aboutDescription');

  const { username } = useSelector((state) => state.user.user);
  const [description, setDescription] = useState(aboutDescription || '');

  useEffect(() => {
    if (!aboutDescription) {
      localStorage.setItem('aboutDescription', '<p><strong>Sistema de visualización de eventos.</strong><br><br>Desarrollado para Grupo Bimbo de El Salvador S.A. de C.V.<br><br>Por Servicios de Ingenieria e Instrumentacion Electrica.<br><br>Cesar A. Vega Naves<br>Steven B. Diaz Flores<br><br>Derechos Reservados 2021<br><br>cesar.vega@cavega.com.sv</p>');
    }
  }, []);

  return (
    <div>
      <div className="mx-16">
        <div className="text-4xl font-extrabold pt-6 mb-10">
          Acerca de
        </div>
        <div className="border-2 flex flex-wrap justify-center items-center border-blue-500 rounded-lg p-8 mb-5">
          <h1 className="w-full text-center text-2xl font-bold mb-5">Programa desarrollado por:</h1>
          <div style={{ height: '40vh' }} className="w-full lg:w-1/3 mb-5 flex flex-wrap justify-center">
            <img
              className="h-full"
              src="/images/informacion-1.jpg"
              alt="default"
            />
          </div>
          {
            username === 'super_admin'
              ? (
                <div className="w-full lg:w-1/3">
                  <FroalaEditorComponent
                    config={{
                      placeholderText: 'Escribe una descripción',
                    }}
                    model={description}
                    onModelChange={(model) => setDescription(model)}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-eastern-blue-500 rounded-lg focus:outline-none
                    text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 my-5"
                    onClick={() => {
                      localStorage.setItem('aboutDescription', description);
                      fireToast('success', 'Descripcion actualizada correctamente');
                    }}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    {' '}
                    Guardar
                  </button>
                </div>
              )
              : (
                <div className="w-full lg:w-1/3 mb-5">
                  <FroalaEditorView model={description} />
                </div>
              )
          }
          <div style={{ height: '40vh' }} className="w-full lg:w-1/3 mb-5 flex items-center flex-wrap justify-center">
            <img
              style={{ height: '75%' }}
              src="/images/informacion-2.jpg"
              alt="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
