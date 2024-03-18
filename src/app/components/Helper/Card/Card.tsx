import { FC, HTMLAttributes } from 'react'

import { Title } from '../../Title/Title'
import { Subtitle } from '../../Subtitle/Subtitle'

import s from './Card.module.css'

interface ILink extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
  subtitle: string;
}

export const Card: FC<ILink> = ({
  title, subtitle, ...rest
}) => (
  <div className={s.card}>
    <div className={s.img} {...rest} />
    <div className={s.box}>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </div>
  </div>
)
