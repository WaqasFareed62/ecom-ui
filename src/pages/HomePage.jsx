import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import BrandInfo from "../components/BrandInfo";
import CollectionSection from "../components/CollectionSection";
import ProductCollection from "../components/ProductCollection";
import BestProduct from "../components/BestProduct";
import BannnerSection from "../components/BannnerSection";
function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex justify-center  ">
        <BrandInfo />
      </div>
      <CollectionSection />
      <ProductCollection />
      <BestProduct />
      <BannnerSection />
    </div>
  );
}

export default HomePage;
