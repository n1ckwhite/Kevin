import { FC } from "react"

import { ACCORDIONS } from "@/constans"

import { Subtitle } from "../Subtitle"
import { Title } from "../Title"

import { Accordion } from "./components/Accordion"
import s from "./Faq.module.css"

export const Faq: FC = () => (
  <div className={s.container}>
    <Title text="Ответы на вопросы" />
    <Subtitle
      text="Специально для вас собрали часто-задаваемые вопросы
        и ответили на них"
    />
    <ul className={s.accordion__section}>
      {ACCORDIONS.map((accordion) => (
        <li key={accordion.id}>
          <Accordion text={accordion.text} title={accordion.title} />
        </li>
      ))}
    </ul>
  </div>
)
