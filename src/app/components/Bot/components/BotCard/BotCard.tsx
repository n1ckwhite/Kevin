import { FC } from "react";

import s from "./BotCard.module.css";

interface IBotCardProps {
  step: string;
  title: string;
  subtitle: string;
}

export const BotCard: FC<IBotCardProps> = ({ step, title, subtitle }) => (
  <div className={s.card}>
    <p className={s.step}>{step}</p>
    <div className={s.text}>
      <p className={s.title}>{title}</p>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  </div>
);
