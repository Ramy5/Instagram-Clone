import Suggest from "@/components/UI/Suggest";
import React from "react";

const MiniProfile = () => {
  const propsToPass = {
    className: "my-8",
    imgUrl:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
    name: "Username",
    imgWidth: 55,
    imgHeight: 40,
    titleDesc: "Welcome to instagram",
    btnText: "Sign out",
  };

  return <Suggest {...propsToPass} />;
};

export default MiniProfile;
