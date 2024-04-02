import { FC, HTMLAttributes } from 'react'

import { Title } from '../../Title/Title'
import { Subtitle } from '../../Subtitle/Subtitle'

import s from './LandingCard.module.css'

interface ILink extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
  subtitle: string;
}

export const LandingCard: FC<ILink> = ({
  title, subtitle, ...rest
}) => (
  <div className={s.box}>
    <Title text={title} />
    <Subtitle text={subtitle} />
  </div>
)
