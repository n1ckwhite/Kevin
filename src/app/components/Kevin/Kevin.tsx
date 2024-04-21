import { FC } from "react";

import { KevinMessage } from "./components/KevinMessage";
import { KevinTitle } from "./components/KevinTitle";
import s from "./Kevin.module.css";

export const Kevin: FC = () => (
  <div className={s.wrapper}>
    <div className={s.wrapper__scroll}>
      <div className={s.title_scroll}>
        <KevinTitle />
      </div>
      <KevinMessage />
    </div>
  </div>
);
