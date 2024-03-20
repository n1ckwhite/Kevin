"use client";

import { FC, useState } from "react";

import { Icon } from "@/app/components/Icon";

import s from "./Accordion.module.css";
import cn from "classnames";
interface IAccordion {
  title: string;
  text: string;
}

export const Accordion: FC<IAccordion> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button onClick={() => setIsActive(!isActive)} className={s.section}>
      <div className={cn(s.card, !isActive && s.card__default)}>
        <div className={s.title__card}>
          <p>{title}</p>
          <div className={cn(s.card__icon, isActive && s.card__icon_active)}>
            <Icon name="chevron_down" />
          </div>
        </div>
        <p className={cn(s.body__card, isActive && s.body__card_active)}>
          {text}
        </p>
      </div>
    </button>
  );
};
