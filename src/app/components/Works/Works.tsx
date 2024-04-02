import { FC } from 'react'

import { Title } from '../Title'
import { Subtitle } from '../Subtitle'
import { Phone } from './Phone'

import s from './Works.module.css'

export const Works: FC = () => (
  <section className={s.works} >
    <div className={s.works__wrapper} >
      <div className={s.works__frame} >
        <Title strong text="Как это работает?" />
        <Subtitle strong text="Бот работает по принципу запросов, задайте вопрос 
и получите развернутый ответ" />
      </div>
      <Phone />
    </div>
  </section>  
)
