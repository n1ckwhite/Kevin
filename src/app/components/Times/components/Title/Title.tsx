import { FC } from 'react'

import s from './Title.module.css'

interface ITitle {
  text: string;
  textColor: string;
  textColor2: string;
}

export const Title: FC<ITitle> = ({ text, textColor, textColor2 }) => (
  <div>
    <p className={s.text}>
      {text}
      <span className={s.colorText}>{textColor}</span>
    </p>
    <p className={s.colorText}>{textColor2}</p>
  </div>

)
