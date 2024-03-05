import { FC } from 'react'

import s from './SubTitle.module.css'

interface ISubTitle {
  text: string;
}

export const SubTitle: FC<ISubTitle> = ({ text }) => (
  <p className={s.text}>{text}</p>
)
