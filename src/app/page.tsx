import "./assets/styles/main.css"

import { Header } from "./components/Header"
import { Times } from "./components/Times"
import { Footer } from "./components/Footer"
import { Faq } from "./components/Faq"
import { Helper } from "./components/Helper"
import { Works } from "./components/Works"

const Home = () => (
  <div>
    <Header />
    <Works />
    <Helper />
    <Times />
    <Faq />
    <Footer />
  </div>
)

export default Home
