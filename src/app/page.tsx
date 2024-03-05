import './assets/styles/main.css'
import { Test } from '@/app/components/Test'

import { Times } from './components/Times/Times'

const Home = () => (
  <div>
    <Test text="Welcome to the Home Page" />
    <Times />
  </div>
)

export default Home
