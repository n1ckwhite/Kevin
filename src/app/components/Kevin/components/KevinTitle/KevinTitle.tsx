import { FC } from "react";

import s from "./KevinTitle.module.css";

export const KevinTitle: FC = () => (
  <h1 className={s.title}>
    Kevin&nbsp;&mdash;телеграм бот
    <br className={s.br} />
    для
    <span className={s.title__span}>продуктовой</span>
    аналитики
  </h1>
);
