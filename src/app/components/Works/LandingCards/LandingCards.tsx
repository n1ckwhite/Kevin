import { FC } from 'react'

import { LANDINGCARDS } from "@/constans"

import { LandingCard } from '../LandingCard/LandingCard'

import s from './LandingCards.module.css'

export const LandingCards: FC = () => (
  <ul className={s.grid}>
    {LANDINGCARDS.map((card) => (
      <li className={s.grid__card} key={card.id}>
        <LandingCard
          subtitle={card.subtitle}
          title={card.title}
        />
      </li>
    ))}
  </ul>
)
