import React, { useContext } from "react";
import Navbar from "./navbar";
import Hero_sec from "./hero_sec";
import { customHook1 } from "../../context/prod_context";
import FeatureProducts from "./FeatureProducts";

const Landing = () => {
  const { name } = customHook1();

  const data = {
    intro: "Welcome to Gadget-Store!",
  };
  return (
    <div>
      {name}
      <Hero_sec myData={data} />
      <FeatureProducts />
    </div>
  );
};

export default Landing;
