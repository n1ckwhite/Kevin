import { FC, HTMLAttributes } from 'react'

import { Title } from '../../Title/Title'
import { Subtitle } from '../../Subtitle/Subtitle'

import s from './Card.module.css'

interface ILinkProps extends HTMLAttributes<HTMLParagraphElement> {
  title: string
  subtitle: string
}

export const Card: FC<ILinkProps> = ({
  title,
  subtitle,
  ...props
}) => (
  <div className={s.card}>
    <div className={s.img} {...props} />
    <div className={s.box}>
      <Title text={title} />
      <p className={s.subtitle}>
        {subtitle}
      </p>
    </div>
  </div>
)
