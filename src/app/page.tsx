import "./assets/styles/main.css"

import { Kevin } from "@/app/components/Kevin"
import { Bot } from "@/app/components/Bot"

import { Header } from "./components/Header"
import { Times } from "./components/Times"
import { Footer } from "./components/Footer"
import { Faq } from "./components/Faq"
import { Helper } from "./components/Helper"
import s from './page.module.css'

const Home = () => (
  <div className={s.page}>
    <Header />
    <div className={s.wrapper}>
      <Kevin />
      <Bot />
      <Helper />
      <Times />
      <Faq />
      <Footer />
    </div>
  </div>
)

export default Home
