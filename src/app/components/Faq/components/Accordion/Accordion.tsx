"use client"

import { FC, useState } from "react"
import cn from "classnames"

import { Icon } from "@/app/components/Icon"

import s from "./Accordion.module.css"

interface IAccordion {
  title: string;
  text: string;
}

export const Accordion: FC<IAccordion> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <button className={s.section} onClick={() => setIsActive(!isActive)}>
      <div className={cn(s.card, !isActive && s.card__default)}>
        <div className={s.title__card}>
          <p className={s.card__title_text}>{text}</p>
          <div className={cn(s.card__icon, isActive && s.card__icon_active)}>
            <Icon name="chevron_down" />
          </div>
        </div>
        <p className={cn(s.body__card, isActive && s.body__card_active)}>
          {text}
        </p>
      </div>
    </button>
  )
}
