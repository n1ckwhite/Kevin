'use client'

import { FC, useState } from 'react'

import { Icon } from '@/app/components/Icon'

import s from './Accordion.module.css'

interface IAccordion {
  title: string
  text: string
}

export const Accordion: FC<IAccordion> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false)
  const [isIcon, setIsIcon] = useState(true)

  return (
    <div className={s.section}>
      <div className={!isActive ? s.card__default : s.card}>
        {isIcon && (
          <button
            className={s.title__card}
            onClick={() => setIsActive(!isActive)}
          >
            <p>
              {title}
            </p>
            {isActive ? <Icon name="chevron_up" />
              : <Icon name="chevron_down" /> }
          </button>
        )}
        {isActive && <p className={s.body__card}>{text}</p>}
      </div>
    </div>
  )
}
