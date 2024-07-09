import React from "react";

const SettingsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Configuración de Ajustes
        </h1>

        {/* Sección de Accesibilidad */}
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Accesibilidad</h2>

          {/* Opciones de Accesibilidad */}
          <div className="space-y-4">
            {/* Cambiar Tema */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Cambiar Tema</span>
              <div>
                <select className="px-3 py-1 border border-gray-300 rounded">
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                </select>
              </div>
            </div>

            {/* Tamaño del Texto */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Tamaño del Texto</span>
              <div>
                <select className="px-3 py-1 border border-gray-300 rounded">
                  <option value="small">Pequeño</option>
                  <option value="medium">Medio</option>
                  <option value="large">Grande</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">Idioma</span>
              <div>
                <select className="px-3 py-1 border border-gray-300 rounded">
                  <option value="small">Español</option>
                  <option value="medium">Inglés</option>
                  <option value="large">Portugues</option>
                </select>
              </div>
            </div>

            {/* Alto Contraste */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Alto Contraste</span>
              <label htmlFor="toggle" className="flex items-center">
                <input
                  type="checkbox"
                  id="toggle"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Activado</span>
              </label>
            </div>
          </div>
        </div>
        {/* Sección de Cuenta */}
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cuenta</h2>

          {/* Opciones de Cuenta */}
          <div className="space-y-4">
            {/* Cambiar Contraseña */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Cambiar Contraseña</span>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Cambiar
              </button>
            </div>

            {/* Actualizar Email */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Actualizar Email</span>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Actualizar
              </button>
            </div>

            {/* Eliminar Cuenta */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Eliminar Cuenta</span>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
