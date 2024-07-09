import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Image
              src="/logo-white.svg"
              alt="ACCON Real State"
              width={220}
              height={180}
              className="h-[70px]"
            />
          </div>
          <nav className="">
            <Link href="/app" className="hidden hover:underline">
              Propiedades
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560"
              alt="Casas"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Casas</h2>
            <p>Encuentra la casa de tus sueños</p>
            <Link
              href={"/app"}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Ver más
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto.jpg"
              alt="Departamentos"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Departamentos</h2>
            <p>Encuentra las mejores comodidades</p>
            <Link
              href={"/app"}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
            >
              Ver más
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/foto-gratis/hermoso-paisaje-cielo-despejado_23-2149721820.jpg"
              alt="Loteizaciones"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Loteizaciones</h2>
            <p>Encuentra donde vivir fácilmente</p>
            <Link
              href={"/app"}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
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
