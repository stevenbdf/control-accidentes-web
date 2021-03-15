import Switch from "../components/Switch"
import Button from "../components/Button"

const Config = () => {
  return (
    <div className="mx-16">
      <div className="text-4xl font-extrabold pt-12">
        Configuraciones
      </div>
      <div className="border-2 border-blue-400 mt-10 space-y-16 rounded-lg">
        <div className="text-2xl pl-12 pt-4 font-bold">
          Secciones a mostrar
        </div>
        <div className="w-full px-56">
          <Switch />
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="border-2 border-blue-400 mt-16 space-y-8 rounded-lg md:flex md:flex-col">
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
            <textarea placeholder="Escriba aqui su texto informativo" className="xl:-ml-14 xl:mr-10 border-2 px-4 py-2 border-blue-600 rounded-lg" name="" id="" cols="70" rows="4"></textarea>
          </div>
          <div className="flex items-center">
            <div className="text-lg lg:mr-6 2xl:mr-16 2xl:mb-8">Texto marquesina:</div>
            <textarea placeholder="Escriba aqui su texto marquesina" className="xl:-ml-14 2xl:mb-6  border-2 px-4 py-2 border-blue-600 rounded-lg" name="" id="" cols="70" rows="4"></textarea>
          </div>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default Config;