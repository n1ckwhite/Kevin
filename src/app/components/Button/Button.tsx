import { FC } from 'react'

import s from './Button.module.css'

interface IButton {
  text: string;
}

export const Button: FC<IButton> = ({ text }) => (
  <div className={s.btn__tg}>
    <button className={s.button}>{text}</button>
  </div>
)
