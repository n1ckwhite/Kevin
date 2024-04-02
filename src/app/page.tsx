import "./assets/styles/main.css"

import { Kevin } from "@/app/components/Kevin"

import { Header } from "./components/Header"
import { Times } from "./components/Times"
import { Footer } from "./components/Footer"
import { Faq } from "./components/Faq"
import { Helper } from "./components/Helper"
import { Works } from "./components/Works"
import s from './page.module.css'

const Home = () => (
  <div className={s.page}>
    <Header />
    <div className={s.wrapper}>
      <Kevin />
      <Works />
      <Helper />
      <Times />
      <Faq />
      <Footer />
    </div>
  </div>
)

export default Home
