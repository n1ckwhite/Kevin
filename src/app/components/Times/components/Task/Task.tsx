import { FC } from 'react'

import s from './Task.module.css'

interface ITask {
  text1: string,
  text2: string,
  text3: string,
  text4: string,
  btnTitle: string,
}

export const Task:FC<ITask> = ({ text1, text2, text3, text4, btnTitle }) => (
  <div className={s.section}>
    <div className={s.card}>
      <button className={s.btn}>{ btnTitle }</button>
      <ul className={s.ul}>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
      </ul>
    </div>
  </div>
)
