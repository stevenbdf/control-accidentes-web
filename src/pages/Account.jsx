import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { SketchPicker } from 'react-color';
import { update } from '../store/user/actions';
import validator from '../helpers/validator';
import { fireToast } from '../helpers/utilities';

const Account = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.user);
  const {
    register, handleSubmit, errors, reset,
  } = useForm({
    mode: 'onChange',
  });
  const backgroundInterface = localStorage.getItem('backgroundInterface');
  const textInterface = localStorage.getItem('textInterface');
  const backgroundMarquee = localStorage.getItem('backgroundMarquee');
  const textMarquee = localStorage.getItem('textMarquee');
  const backgroundInformation = localStorage.getItem('backgroundInformation');
  const textInformation = localStorage.getItem('textInformation');
  const backgroundChart = localStorage.getItem('backgroundChart');
  const borderChart = localStorage.getItem('borderChart');

  const showBgImage = JSON.parse(localStorage.getItem('showBgImage'));

  const infoBackgroundImage = localStorage.getItem('infoBackgroundImage');

  const [bgColorInterface, setBgColorInterface] = useState(backgroundInterface || '');
  const [textColorInterface, setTextColorInterface] = useState(textInterface || '');
  const [bgColorMarquee, setBgColorMarquee] = useState(backgroundMarquee || '');
  const [textColorMarquee, setTextColorMarquee] = useState(textMarquee || '');
  const [bgColorInformation, setBgColorInformation] = useState(backgroundInformation || '');
  const [textColorInformation, setTextColorInformation] = useState(textInformation || '');
  const [bgColorChart, setBgColorChart] = useState(backgroundChart || '');
  const [borderColorChart, setBorderColorChart] = useState(borderChart || '');

  const [showBgImageState, setShowBgImageState] = useState(showBgImage);

  const [image, setImage] = useState(infoBackgroundImage || 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png');

  const onSubmit = (data) => {
    dispatch(update({ ...data, id }));
    reset();
  };

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
          Cuenta
        </div>
        <div className="border-2 flex flex-wrap border-blue-500 rounded-lg p-8 mb-5">
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color fondo multimedia</p>
              <SketchPicker
                color={bgColorInterface}
                onChange={(color) => {
                  setBgColorInterface(color.hex);
                  localStorage.setItem('backgroundInterface', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color borde multimedia</p>
              <SketchPicker
                color={textColorInterface}
                onChange={(color) => {
                  setTextColorInterface(color.hex);
                  localStorage.setItem('textInterface', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color fondo marquesina</p>
              <SketchPicker
                color={bgColorMarquee}
                onChange={(color) => {
                  setBgColorMarquee(color.hex);
                  localStorage.setItem('backgroundMarquee', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color texto marquesina</p>
              <SketchPicker
                color={textColorMarquee}
                onChange={(color) => {
                  setTextColorMarquee(color.hex);
                  localStorage.setItem('textMarquee', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color fondo conteo accidentes</p>
              <SketchPicker
                color={bgColorInformation}
                onChange={(color) => {
                  setBgColorInformation(color.hex);
                  localStorage.setItem('backgroundInformation', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color texto conteo accidentes</p>
              <SketchPicker
                color={textColorInformation}
                onChange={(color) => {
                  setTextColorInformation(color.hex);
                  localStorage.setItem('textInformation', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color fondo graficas</p>
              <SketchPicker
                color={bgColorChart}
                onChange={(color) => {
                  setBgColorChart(color.hex);
                  localStorage.setItem('backgroundChart', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color texto graficas</p>
              <SketchPicker
                color={borderColorChart}
                onChange={(color) => {
                  setBorderColorChart(color.hex);
                  localStorage.setItem('borderChart', color.hex);
                  fireToast('success', 'Color modificado correctamente');
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-500 rounded-lg py-8 space-y-8 mx-16 mb-5">
        <div className="text-xl pl-12 pt-2 font-bold">
          <p className="mb-5">Configuración de recuadro informativo</p>
          <p className="text-center ext-lg font-normal mb-5">Selecciona tipo de fondo a mostrar:</p>
          <div className="text-base font-normal flex justify-center mb-5">
            <label className="mr-20">
              <input
                checked={showBgImageState}
                onChange={() => {
                  setShowBgImageState(true);
                  localStorage.setItem('showBgImage', true);
                }}
                className="mr-3"
                type="radio"
              />
              Imagen
            </label>
            <label>
              <input
                checked={!showBgImageState}
                onChange={() => {
                  setShowBgImageState(false);
                  localStorage.setItem('showBgImage', false);
                }}
                className="mr-3"
                type="radio"
              />
              Color
            </label>
          </div>
          {
            showBgImageState
            && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-center ext-lg font-normal mb-5">Selecciona la imagen a mostrar:</p>
                <img className="w-2/12 mb-5" src={image} alt="bg" />
                <input
                  type="file"
                  onChange={async (event) => {
                    getBase64(event.target.files[0])
                      .then((result) => {
                        setImage(result);
                        localStorage.setItem('infoBackgroundImage', result);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                />
              </div>
            )
          }
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-blue-500 rounded-lg py-8 space-y-8 mx-16 mb-5">
        <div className="text-xl pl-12 pt-2 font-bold">
          Cambiar contraseña
        </div>
        <div className="flex justify-around">
          <div>
            <div className=" text-lg font-semibold mb-2">
              Nueva contraseña:
            </div>
            <div>
              <input
                name="password"
                ref={register({ required: validator.required, pattern: validator.noEmptySpace })}
                className="py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none"
                type="password"
                placeholder="*************"
              />
              {errors.password && <p className="my-1 text-red-500">{errors.password.message}</p>}
            </div>
          </div>
          <div>
            <div className=" text-lg font-semibold mb-2">
              Repita la nueva contraseña:
            </div>
            <div>
              <input
                name="password_confirmation"
                ref={register({ required: validator.required, pattern: validator.noEmptySpace })}
                className="py-1 w-48 px-4 border-2 border-blue-500 rounded-lg focus:outline-none"
                type="password"
                placeholder="************"
              />
              {errors.password_confirmation && <p className="my-1 text-red-500">{errors.password_confirmation.message}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="submit"
            className="px-4 py-2 bg-eastern-blue-500 rounded-lg focus:outline-none text-white hover:text-black hover:bg-blue-400 transition-colors duration-300 "
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            {' '}
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
