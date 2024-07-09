import Image from "next/image";
import { Proyect } from "../../components/component/proyect";
import { Tarjeta } from "@/components/component/tarjeta";
import ContentDiv from "@/components/ContentDiv";

export default function Home() {
  return (
    <ContentDiv>
      <div className="mt-3">
        <div className="flex py-10 gap-10 items-center">
          <input
            className="border border-blue-900 p-2 rounded-lg"
            type="text"
            placeholder="ubicacion"
          />
          <select className="p-2 border border-blue-900" name="" id="">
            <option value="">Departamentos</option>
            <option value="">Casas</option>
            <option value="">Terrenos</option>
            <option value="">lotizaciones</option>
          </select>
          <button className="px-10 text-center font-bold py-2 text-white bg-[#2962FF] rounded-xl">
            filtrar
          </button>
        </div>
        <div className="flex flex-wrap p-3 gap-10">
          <Tarjeta />
          <Tarjeta />
          <Tarjeta />
          <Tarjeta />
        </div>
      </div>
    </ContentDiv>
  );
}
