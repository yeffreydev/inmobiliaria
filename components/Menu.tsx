import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

function Menu() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="py-3">
        <Image
          src="logo_main.svg"
          alt="ACCON Real State"
          width={220}
          height={180}
          className="h-[100px]"
        />
      </div>
      <ul className="w-full flex flex-col gap-5">
        <li className="w-full">
          <Link className="flex items-center p-3 gap-3" href={"/app"}>
            <FaSearch />
            Explorar
          </Link>
        </li>
        <li className="w-full">
          <Link className="flex items-center p-3 gap-3" href={"/new"}>
            <FaPlus />
            publicar
          </Link>
        </li>
        <li className="w-full">
          <Link className="flex items-center p-3 gap-3" href={"/dashboard"}>
            <AiOutlineDashboard />
            Dashboard
          </Link>
        </li>
        <li className="w-full text-red-400">
          <Link className="flex items-center p-3 gap-3" href={"#!"}>
            <MdOutlineSettings />
            ajustes
          </Link>
        </li>
        <li className="w-full text-red-400">
          <Link className="flex items-center p-3 gap-3" href={"#!"}>
            <span className="w-[20px] bg-black h-[20px] rounded-full"></span>
            <span>Perfil</span>
          </Link>
        </li>
      </ul>
      <div className="flex-1 w-full py-3 flex items-end">
        <Link
          className="p-3 w-full text-red-400 flex items-center gap-3"
          href={"/login"}
        >
          <RiLogoutBoxLine />
          Cerrar Sesion
        </Link>
      </div>
    </div>
  );
}

export default Menu;
