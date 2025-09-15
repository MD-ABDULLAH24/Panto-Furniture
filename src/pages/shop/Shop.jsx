import React from "react";
import banner from "../../assets/hero.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* Banner  */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-4xl font-bold ">Shop our products</h1>
      </div>
      <Products headline="What's your choice"/>
    </section>
  );
};

export default Shop;
