import { FC, HTMLAttributes } from 'react'
import { Title } from '../../Title/Title'
import { Subtitle } from '../../Subtitle/Subtitle'
import s from "./Card.module.css"

interface ILink extends HTMLAttributes<HTMLParagraphElement> {
  link: string;
  textT: string;
  textS: string;
}

export const Card: FC<ILink> = ({ link, textT, textS, ...rest }) => (
  <div className={s.card}>
    <div className={s.img} {...rest} />
    <div className={s.box}>
      <Title text={textT} h={'h2'} />
      <Subtitle text={textS} h={'h2'} />
    </div>
  </div>
)
