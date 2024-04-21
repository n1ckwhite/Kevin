import { FC, HTMLAttributes } from "react"
import Image, {StaticImageData} from "next/image"

import { Title } from "../../Title/Title"

import s from "./Card.module.css"

interface ILinkProps extends HTMLAttributes<HTMLParagraphElement> {
  title: string
  subtitle: string
  img: StaticImageData
}

export const Card: FC<ILinkProps> = ({
  title,
  subtitle,
  img,
  ...props }) => (
  <div className={s.card}>
    <Image className={s.img} alt="изображение" src={img} />
    <div className={s.box}>
      <Title text={title} />
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  </div>
)
