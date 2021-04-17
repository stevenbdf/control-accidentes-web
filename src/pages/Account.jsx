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

  const [bgColorInterface, setBgColorInterface] = useState(backgroundInterface || '');
  const [textColorInterface, setTextColorInterface] = useState(textInterface || '');
  const [bgColorMarquee, setBgColorMarquee] = useState(backgroundMarquee || '');
  const [textColorMarquee, setTextColorMarquee] = useState(textMarquee || '');

  const onSubmit = (data) => {
    dispatch(update({ ...data, id }));
    reset();
  };

  return (
    <div>
      <div className="mx-16">
        <div className="text-4xl font-extrabold pt-6 mb-10">
          Cuenta
        </div>
        <div className="border-2 flex flex-wrap border-blue-500 rounded-lg p-8 mb-5">
          <div className="md:w-1/2 lg:w-1/4">
            <div className="text-xl pl-12 pt-2 font-bold flex flex-wrap items-center">
              <p className="my-3 w-full">Color fondo interfaz</p>
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
              <p className="my-3 w-full">Color texto interfaz</p>
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
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-blue-500 rounded-lg py-8 space-y-8 mx-16">
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
