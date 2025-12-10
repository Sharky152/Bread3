import React from "react";
import { Header } from "../components/ui/Header/Header";
import style from "./Shop/Shop.module.css";
import { Footer } from "../components/ui/footer/Footer";

function Shop() {
  return (
    <>
      <Header />
      <main>
        <nav className={style.Shop_body}>
          <nav className={style.Body_color}></nav>
        </nav>
      </main>
      <Footer />
    </>
  );
}
export default Shop;
