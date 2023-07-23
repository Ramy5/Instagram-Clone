import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="w-36 h-28 hidden lg:inline-grid relative cursor-pointer">
        <Image
          className=""
          src={
            "https://static.india.com/wp-content/uploads/2021/11/Instagram-Logo.jpg?impolicy=Medium_Resize&w=1200&h=800"
          }
          alt="Logo"
          fill="contain"
        />
      </div>

      <div className="w-12 h-12 lg:hidden relative cursor-pointer my-8">
        <Image
          className=""
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          }
          alt="Logo"
          fill="contain"
        />
      </div>
    </>
  );
};

export default Logo;
