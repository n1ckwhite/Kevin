import { FC } from "react";

import { Subtitle } from "../Subtitle";
import { Title } from "../Title";

import { Accordion } from "./components/Accordion";
import s from "./Faq.module.css";
import { ACCORDIONS } from "@/constans";

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
);
