import ContentDiv from "@/components/ContentDiv";
import React from "react";

function page() {
  return (
    <ContentDiv>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">
            Registrar Nuevo Terreno
          </h3>
          <p className="text-sm text-muted-foreground">
            Ingresa los detalles del terreno en Valle Grande.
          </p>
        </div>
        <div className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Descripción del Terreno
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="description"
                  rows={3}
                  placeholder="Describe el terreno..."
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="owner-name" className="text-sm font-medium">
                    Nombre del Propietario
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="owner-name"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="owner-phone" className="text-sm font-medium">
                    Teléfono del Propietario
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="owner-phone"
                    placeholder="(123) 456-7890"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="status" className="text-sm font-medium">
                    Estado del Terreno
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r2:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>Selecciona el estado</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <select
                    aria-hidden="true"
                    // tabindex={}
                    // style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
                  >
                    <option value=""></option>
                    <option value="available">Disponible</option>
                    <option value="reserved">Reservado</option>
                    <option value="sold">Vendido</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Ubicación
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="location"
                    placeholder="Valle Grande, Provincia"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="size" className="text-sm font-medium">
                    Tamaño del Terreno (m²)
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="size"
                    placeholder="1000"
                    type="number"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="services" className="text-sm font-medium">
                    Servicios Disponibles
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="services"
                    placeholder="Agua, Luz, Alcantarillado"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Imagen del Terreno
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="image"
                  type="file"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="notes" className="text-sm font-medium"></label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContentDiv>
  );
}

export default page;
