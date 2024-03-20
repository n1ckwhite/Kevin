import "./assets/styles/main.css";

import { Header } from "./components/Header";
import { Times } from "./components/Times";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { Helper } from "./components/Helper";

const Home = () => (
  <div>
    <Header />
    <Helper />
    <Times />
    <Faq />
    <Footer />
  </div>
);

export default Home;
