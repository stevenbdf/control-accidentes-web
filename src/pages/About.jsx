/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { fireToast } from '../helpers/utilities';

const Account = () => {
  const aboutDescription = localStorage.getItem('aboutDescription');
  const aboutImage = localStorage.getItem('aboutImage');
  const aboutImage2 = localStorage.getItem('aboutImage2');

  const { username } = useSelector((state) => state.user.user);
  const [description, setDescription] = useState(aboutDescription || '');
  const [image, setImage] = useState(aboutImage || '');
  const [image2, setImage2] = useState(aboutImage2 || '');

  const getBase64 = (file) => new Promise((resolve) => {
    let baseURL = '';
    // Make new FileReader
    const reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result;
      resolve(baseURL);
    };
  });

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
              src={image}
              alt="default"
            />
            {
              username === 'super_admin'
              && (
                <input
                  type="file"
                  onChange={async (event) => {
                    getBase64(event.target.files[0])
                      .then((result) => {
                        setImage(result);
                        localStorage.setItem('aboutImage', result);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                />
              )
            }
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
          <div style={{ height: '40vh' }} className="w-full lg:w-1/3 mb-5 flex flex-wrap justify-center">
            <img
              className="h-full"
              src={image2}
              alt="default"
            />
            {
              username === 'super_admin'
              && (
              <input
                type="file"
                onChange={async (event) => {
                  getBase64(event.target.files[0])
                    .then((result) => {
                      setImage2(result);
                      localStorage.setItem('aboutImage2', result);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
