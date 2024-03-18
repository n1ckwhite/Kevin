import { FC } from 'react'
import { Title } from '../Title/Title'
import { Subtitle } from '../Subtitle/Subtitle'
import { Card } from './Card/Card'
import s from './Helper.module.css'

export const Helper: FC = () => (
  <section className={s.helper}>
    <div className={s.helper__wrapper}>
      <div className={s.frame}>
        <Title text="Кому это нужно?" h={'h1'} />
        <Subtitle text="Наш чат-бот способен помочь многим специалистам" h={'h1'} />
      </div>
      <ul className={s.grid}>
        <Card link="" textT="Продуктологи" textS="Автоматизируйте свои рутинные задачи" />
        <Card link="" textT="Менеджеры" textS="Не тратьте время на сбор и аналитику информации" />
        <Card link="" textT="Бизнесмены" textS="Исследуйте рыночные ниши всего за пару минут" />
        <Card link="" textT="IT – специалисты" textS="Получите опыт в продуктовых исследованиях" />
      </ul>
    </div>
  </section>
)
