import { FC } from 'react'

import s from './TimesTitle.module.css'

interface ITitleProps {
  text: string
  strong: string
}

export const TimesTitle: FC<ITitleProps> = ({ text, strong }) => (
  <p className={s.text}>
    {text}
    <span className={s.strong}>{strong}</span>
  </p>

)
