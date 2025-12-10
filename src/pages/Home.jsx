import React from "react";
import { Header } from "../components/ui/Header/Header";
import styles from "./home/home.module.css";
import { Footer } from "../components/ui/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.invisible}>
          <nav className={styles.overlaw}>
            <h1>Breaking Bread</h1>
            <h2>Пора печь</h2>
          </nav>
        </nav>
        <nav className={styles.container_welcom}>
          <nav className={styles.container_description}>
            <video className="background-video" autoPlay loop muted playsInline>
              <source src="src\pages\home\Hailuo_Video_2.mp4"></source>
              <source src="src\pages\home\Hailuo_Video_2.webm" />
            </video>
          </nav>
        </nav>

        <nav className={styles.Container_Briefly} id="Description">
          <nav className={styles.invisible2}>
            <nav className={styles.Description} id="1">
              <h1>Крафтовая пекарня Breaking Bread</h1>
              <h2>
                Добро пожаловать в Breaking Bread. Место, где выпечка кристально
                чиста, а вкусы взрывоопасны. Наши круассаны взрывают вкусовые
                рецепторы, а Синие кексы не отпускают. Заходите — у нас всё
                по‑честному… и очень вкусно.
              </h2>
            </nav>
          </nav>
        </nav>
        <nav className={styles.cards_products} id="2">
          <button href="Shop" className={styles.bread}>
            <nav className={styles.card}>
              <h1>Хлеб</h1>
            </nav>
          </button>
          <button href="Shop" className={styles.desserts}>
            <nav className={styles.card}>
              <h1>Десерты</h1>
            </nav>
          </button>
          <button href="Shop" className={styles.cakes}>
            <nav className={styles.card}>
              <h1>Торты</h1>
            </nav>
          </button>
          <button href="Shop" className={styles.drinks}>
            <nav className={styles.card}>
              <h1>Напитки</h1>
            </nav>
          </button>
        </nav>
      </main>
      <Footer />
    </>
  );
}
export default Home;
