"use client"

import { FC, useEffect, useState } from "react"
import cn from "classnames"

import { Icon } from "@/app/components/Icon"

import s from "./Accordion.module.css"

interface IAccordionProps {
  title: string
  text: string
  id: number
}

export const Accordion: FC<IAccordionProps> = ({
  title,
  text,
  id,
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (id === 1) {
      setIsActive(true)
    }
  }, [id])

  return (
    <button
      className={s.section}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={cn(
        s.card,
        isActive
          ? s.card__shadow
          : s.card__default,
      )}
      >
        <div className={s.title__card}>
          <p className={s.card__title_text}>{title}</p>
          <div className={cn(
            s.card__icon,
            isActive && s.card__icon_active,
          )}
          >
            <Icon name="chevron_down" />
          </div>
        </div>
        <p className={cn(
          s.body__card,
          isActive && s.body__card_active,
        )}
        >
          {text}
        </p>
      </div>
    </button>
  )
}
