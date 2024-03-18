'use client'

import { FC, useState } from 'react'

import s from './Accordion.module.css'

interface IAccordion {
  title: string
  text: string
}

export const Accordion: FC<IAccordion> = ({
  title,
  text,
}) => {
  const [isActive, setIsActive] = useState(false)
  const clickActive = () => {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <div className={s.section}>
      <div className={s.card}>
        <button
          className={s.title__card}
          onClick={clickActive}
        >
          <p>
            {title}
          </p>
        </button>
        {isActive && <p className={s.body__card}>{text}</p>}
      </div>
    </div>
  )
}
