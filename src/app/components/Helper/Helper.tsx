import { FC } from 'react'

import { Title } from '../Title'
import { Subtitle } from '../Subtitle'

import { Cards } from "./Cards"
import s from './Helper.module.css'

export const Helper: FC = () => (
  <section className={s.helper}>
    <div className={s.helper__wrapper}>
      <div className={s.frame}>
        <Title strong text="Кому это нужно?" />
        <Subtitle strong text="Наш чат-бот способен помочь многим специалистам" />
      </div>
      <Cards />
    </div>
  </section>
)
