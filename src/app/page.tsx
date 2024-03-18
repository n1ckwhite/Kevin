import './assets/styles/main.css'

import { Header } from './components/Header'
import { Helper } from './components/Helper'
import { Times } from './components/Times'
import { Footer } from './components/Footer'

const Home = () => (
  <div>
    <Header />
    <Helper />
    <Times />
    <Footer />
  </div>
)

export default Home
