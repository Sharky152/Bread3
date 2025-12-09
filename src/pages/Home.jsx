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
      </main>
      <Footer />
    </>
  );
}
export default Home;
