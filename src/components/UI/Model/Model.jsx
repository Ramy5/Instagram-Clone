import { useGlobalContext } from "@/components/Context/AppContext";
import React from "react";

const Model = () => {
  const {handleCloseImgModel} = useGlobalContext()

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-28 text-6xl">
      <h3>model</h3>
      <p onClick={() => handleCloseImgModel()}>close</p>
    </div>
  );
};

export default Model;
