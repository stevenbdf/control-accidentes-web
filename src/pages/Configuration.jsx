import Switch from "../components/Switch"
import Button from "../components/Button"

const Config = () =>{
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
      <div className="border-2 border-blue-400 mt-16 space-y-8 rounded-lg">
        <div className="text-2xl pl-12 pt-4 font-bold">
          Informacion general
        </div>
        <div className="flex pl-12 items-center">
          <div className="mr-6 text-lg">Fecha ultimo accidente:</div>
          <input className="border-4 px-4 py-2 border-blue-600 rounded-lg" type="date"/>
        </div>
        <div className="flex justify-between mx-12">
          <div className="flex items-center ">
            <div className="mr-2 text-lg">Texto informativo:</div>
            <textarea placeholder="Escriba aqui su texto informativo" className="border-2 px-4 py-2 border-blue-600 rounded-lg" name="" id="" cols="70" rows="4"></textarea>
          </div>
        <div className="flex items-center">
          <div className=" mr-2 text-lg">Texto marquesina:</div>
          <textarea placeholder="Escriba aqui su texto marquesina" className="border-2 px-4 py-2 border-blue-600 rounded-lg" name="" id="" cols="80" rows="4"></textarea>
        </div>
        </div>
        
        <Button />
      </div>
    </div>
  )
}

export default Config;