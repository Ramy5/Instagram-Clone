import Image from "next/image";
import React from "react";

const Suggest = (props) => {
  return (
    <div
      className={`${props.className} flex items-center justify-between flex-wrap`}
    >
      <Image
        className="p-1 bg-white rounded-full"
        src={props.imgUrl}
        alt={props.name}
        width={props.imgWidth}
        height={props.imgHeight}
      />

      <div className="flex-1 ml-4">
        <h3 className="font-bold text-gray-800">{props.name}</h3>
        <p className="text-gray-400 font-semibold text-sm truncate  w-[200px]">
          {props.titleDesc}
        </p>
      </div>

      <button
        onClick={() => signOut()}
        className="cursor-pointer text-orange-600 hover:text-orange-700 transition-colors duration-300 font-semibold"
        type="button"
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default Suggest;
