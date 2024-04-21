import "./assets/styles/main.css";

import Image from "next/image";

import { Kevin } from "@/app/components/Kevin";
import { Bot } from "@/app/components/Bot";

import { Header } from "./components/Header";
import { Times } from "./components/Times";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { Helper } from "./components/Helper";
import s from "./styles/page.module.css";

const Home = () => (
  <div className={s.page}>
    <div className={s.wrapper}>
      <Image
        alt="test"
        className={s.bg}
        height={100}
        priority
        src="./images/bg.png"
        width={100}
      />
      <Header />
      <Kevin />
    </div>
    <Bot />
    <Helper />
    <Times />
    <Faq />
    <Footer />
  </div>
);

export default Home;
