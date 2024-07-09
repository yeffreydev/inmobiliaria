"use client";
import React, { ReactNode, useState } from "react";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

function ContentDiv({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex w-screen h-screen overflow-auto">
      <div className="w-full lg:w-10/12 flex mx-auto">
        <div className="hidden lg:block lg:w-3/12 overflow-auto">
          <Menu handleclose={() => {}} />
        </div>
        {isMenuOpen && (
          <div className="fixed lg:hidden w-6/12 h-full overflow-auto">
            <Menu handleclose={() => setIsMenuOpen(false)} />
          </div>
        )}

        <div className="flex-1 overflow-auto p-3">
          <div className="lg:hidden flex items-center px-5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-4xl"
            >
              <FaBars />
            </button>
            <div className="flex-1 justify-center flex">
              <Image
                src="logo_main.svg"
                alt="ACCON Real State"
                width={220}
                height={180}
                className="h-[100px]"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentDiv;
