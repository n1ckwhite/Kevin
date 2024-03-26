import { FC } from "react"

import { CARDS } from "@/constans"

import { Card } from "../Card"

import s from './Cards.module.css'

export const Cards: FC = () => (
  <ul className={s.grid}>
    {CARDS.map((card) => (
      <li className={s.grid__card} key={card.id}>
        <Card
          subtitle={card.subtitle}
          title={card.title}
        />
      </li>
    ))}
  </ul>
)
