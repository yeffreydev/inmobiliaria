"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBook, FaEye, FaMoon, FaQuestionCircle } from "react-icons/fa";

const Page: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="transform -translate-y-1/2  text-white cursor-pointer z-20 flex items-center left-[5px] text-3xl justify-center w-[50px] h-[50px] fixed top-[50%] bg-blue-700 "
      >
        <FaEye />
      </div>
      {isMenuOpen && (
        <div
          className="pl-[65px] flex flex-col gap-5 justify-center text-white  bg-[#131645] bg-opacity-90 md:w-6/12 w-full lg:w-3/12 h-screen fixed z-10"
          id=""
        >
          <ul className="flex flex-col gap-5">
            <li className="activo">
              <a className="flex items-center gap-3" href="#">
                <FaBook />
                Modo lectura
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3" href="#">
                <FaMoon /> Modo oscuro
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3" href="#">
                <FaQuestionCircle /> Ayuda
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="lg:px-10 px-3 mx-auto flex justify-between items-center">
          <div className="">
            <Image
              src="/logo-white.svg"
              alt="ACCON Real State"
              width={220}
              height={180}
              className="h-[70px]"
            />
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/app" className="hidden lg:block hover:underline">
              Propiedades
            </Link>
            <Link href="#!" className="hidden lg:block hover:underline">
              Contacto
            </Link>

            <Link href="/login" className="bg-[#2962FF] py-2 px-10 rounded-lg">
              Iniciar sesión
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Bienvenido a SWIC</h1>
          <p className="text-lg mb-4">Encuentra fácilmente tu próximo hogar</p>
          <p className="text-gray-600">
            Tenemos las mejores opciones para su familia y usted.
          </p>
        </section>

        {/* Property Types */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560"
              alt="Casas"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Casas</h2>
            <p>Encuentra la casa de tus sueños</p>
            <Link
              href={"/app"}
              className="w-max px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Ver más
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto.jpg"
              alt="Departamentos"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Departamentos</h2>
            <p>Encuentra las mejores comodidades</p>
            <Link
              href={"/app"}
              className="w-max px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Ver más
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/foto-gratis/hermoso-paisaje-cielo-despejado_23-2149721820.jpg"
              alt="Loteizaciones"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Loteizaciones</h2>
            <p>Encuentra donde vivir fácilmente</p>
            <Link
              href={"/app"}
              className="w-max px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Ver más
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-blue-900 text-4xl mb-2">🏠</div>
              <h3 className="text-xl font-bold mb-2">Venta de Propiedades</h3>
              <p>Encuentra la casa de tus sueños para comprar.</p>
            </div>
            <div>
              <div className="text-blue-900 text-4xl mb-2">💼</div>
              <h3 className="text-xl font-bold mb-2">Asesoría</h3>
              <p>Recibe asesoramiento personalizado para tu inversión.</p>
            </div>
            <div>
              <div className="text-blue-900 text-4xl mb-2">🏢</div>
              <h3 className="text-xl font-bold mb-2">Alquiler</h3>
              <p>Encuentra las propiedades ideales para alquilar.</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://chilepsicologos.cl/wp-content/uploads/2024/04/familia-1-scaledfamiliacrisis-de-familia-scaledfamilias-felices-scaled-1.jpg"
              alt="Gallery 1"
              className="w-full h-40 object-cover rounded-md"
            />
            <img
              src="https://bebesonline.es/blog/wp-content/uploads/2015/05/familia-feliz.jpg"
              alt="Gallery 2"
              className="w-full h-40 object-cover rounded-md"
            />
            <img
              src="https://www.lanacion.com.ar/resizer/v2/mas-tiempo-en-el-hogar-implica-que-se-viva-mas-la-YY7SJWVLLVGUNK3BLXU5SMH5OA.jpg?auth=be111d027f8e8212f831e675efe74756d97b3aea142bdd577854ad0440e70b53&width=420&height=280&quality=70&smart=true"
              alt="Gallery 3"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>
          © 2024 SWIC Sistema Web Inmobiliario Completo. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Page;
