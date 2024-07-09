import React, { ReactNode } from "react";
import Menu from "./Menu";

function ContentDiv({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-screen h-screen overflow-auto">
      <div className="w-10/12 flex mx-auto">
        <div className="w-3/12 overflow-auto">
          <Menu />
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default ContentDiv;
