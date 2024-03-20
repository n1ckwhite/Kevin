import { FC } from 'react'

import s from './Title.module.css'

interface ITitle {
  text: string;
}

export const Title: FC<ITitle> = ({ text }) => (
  <div className={s.title__mobile}>
    <p className={s.text}>
      {text}
    </p>
  </div>

)
