import { Proyect } from "@/components/component/proyect";
import ContentDiv from "@/components/ContentDiv";
import Link from "next/link";

export default function page() {
  return (
    <ContentDiv>
      <div className="w-full px-4 sm:px-6 md:px-8 py-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Terreno en Valle Grande</h1>
          <p className="text-muted-foreground">
            Hermoso terreno con vista a la naturaleza. Perfecto para tu hogar
            soñado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <img
              src="/foto1.jpg"
              alt="Terreno en Valle Grande"
              width="600"
              height="400"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Propietario
                </p>
                <p className="text-base">Juan Pérez</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Estado
                </p>
                <p className="text-base">Disponible</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Ubicación
              </p>
              <p className="text-base">Valle Grande, Cajamarca</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Detalles
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <textarea
                className="border p-1 rounded-lg border-gray-700"
                name=""
                placeholder="escribe al dueño..."
                id=""
              ></textarea>
              <button className="bg-[#2962FF] text-lg font-semibold text-white rounded-lg w-max px-7 py-1">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentDiv>
  );
}
