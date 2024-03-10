import { FC } from 'react'

import s from './Subtitle.module.css'

interface ISubTitle {
  text: string;
}

export const Subtitle: FC<ISubTitle> = ({ text }) => (
  <p className={s.text}>{text}</p>
)
