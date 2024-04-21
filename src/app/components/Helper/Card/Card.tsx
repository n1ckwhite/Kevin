import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { Title } from "../../Title/Title";

import s from "./Card.module.css";

interface ILinkProps {
  title: string;
  subtitle: string;
  img: StaticImageData;
}

export const Card: FC<ILinkProps> = ({ title, subtitle, img }) => (
  <div className={s.card}>
    <Image alt="изображение" className={s.img} src={img} />
    <div className={s.box}>
      <Title text={title} />
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  </div>
);
