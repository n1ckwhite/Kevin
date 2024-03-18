import { FC, useState } from 'react'

import s from './Accordion.module.css'

interface IAccordion {
  titleAccordion: string
  textAccordion: string
}

export const Accordion: FC<IAccordion> = ({ titleAccordion, textAccordion }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={s.section}>
      <div className={s.card}>
        <button
          className={s.title__card}
          onClick={() => setIsActive(!isActive)}
        >
          <p>
            {titleAccordion}
          </p>
        </button>
        {isActive && <p className={s.body__card}>{textAccordion}</p>}
      </div>
    </div>
  )
}