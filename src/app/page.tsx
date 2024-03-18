import './assets/styles/main.css'
import { Header } from "@/app/components/Header"
import { Helper } from "@/app/components/Helper"
import { Times } from "@/app/components/Times"
import { Footer } from "@/app/components/Footer"

const Home = () => (
  <div>
    <Header />
    <Helper />
    <Times />
    <Footer />
  </div>
)

export default Home
