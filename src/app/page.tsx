import "./assets/styles/main.css"

import { Header } from "./components/Header"
import { Times } from "./components/Times"
import { Footer } from "./components/Footer"
import { Faq } from "./components/Faq"
import { Helper } from "./components/Helper"
import s from './page.module.css'

const Home = () => (
  <div>
    <Header />
    <div className={s.wrapper}>
      <Helper />
      <Times />
      <Faq />
      <Footer />
    </div>
  </div>
)

export default Home
