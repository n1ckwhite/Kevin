import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import cn from 'classnames'

import { Title } from "@/app/components/Title"
import { Subtitle } from "@/app/components/Subtitle"
import { BotCard } from "@/app/components/Bot/components/BotCard"
import { STEPS } from "@/constans"

import s from './Bot.module.css'

export const Bot: FC = () => (
  <div className={s.bot}>
    <div className={s.text}>
      <Title text="Как это работает?" />
      <Subtitle text="Бот работает по принципу запросов, задайте вопрос
и получите развернутый ответ"
      />
    </div>
    <div className={s.mobile}>
      <Image
        alt="icon"
        className={s.img}
        height="100"
        src="/images/mobile.svg"
        width="100"
      />
      <ul className={s.cards}>
        {STEPS.map(({
          id,
          step,
          subtitle,
          title,
        }) => (
          <li
            className={cn(
              s.card,
              s[`card_${id}`],
            )}
            key={id}
          >
            <BotCard
              step={step}
              subtitle={subtitle}
              title={title}
            />
          </li>
        ))}
      </ul>
      <Link
        className={s.link}
        href="/"
      >
        Перейти в телеграм
      </Link>
    </div>
  </div>

)
