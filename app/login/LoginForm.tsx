/**
 * v0 by Vercel.
 * @see https://v0.dev/t/buy3qgFfrUy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full justify-center items-stretch rounded-lg">
        <div className="hidden lg:flex flex-col items-center ml-auto bg-white  rounded-l-xl overflow-hidden">
          <Image
            src="/logo.svg"
            alt="ACCON Real State"
            width={220}
            height={180}
            className="h-[100px]"
          />
          <img src="/ilus.png" alt="Illustration" className="object-contain" />
        </div>
        <div className="p-10 flex mx-auto lg:mx-0 flex-col justify-center bg-white rounded-r-xl w-max lg:mr-auto">
          <h2 className="mb-6 text-2xl font-bold text-center text-blue-900">
            Iniciar Sesión
          </h2>
          <form className="flex flex-col">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  placeholder="contraseña"
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="text-right">
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline"
                prefetch={false}
              >
                ¿Olvidaste la contraseña?
              </Link>
            </div>
            <Link
              href={"/app"}
              className="w-full text-center font-bold py-2 mt-4 text-white bg-blue-900 rounded-lg"
            >
              LOGIN
            </Link>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
            ¿Aún no tienes una cuenta?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline"
              prefetch={false}
            >
              Registrarme
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
