import { FC } from 'react'

import s from './Accordion.module.css'

interface IAccordion {
  titleAccordion: string
  textAccordion: string
}

export const Accordion: FC<IAccordion> = ({ titleAccordion, textAccordion }) => (
  <div className={s.section}>
    <div className={s.card}>
      {/* див для открыть закрыть */}
      <div>
        <p className={s.title__card}>
          {titleAccordion}
        </p>
      </div>
      <p className={s.body__card}>{textAccordion}</p>
    </div>
  </div>
)
