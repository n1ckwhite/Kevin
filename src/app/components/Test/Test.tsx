import { FC } from 'react'

import s from './Test.module.css'

interface ITest {
  text: string;
}

export const Test: FC<ITest> = ({ text }) => (
  <p className={s.text}>{text}</p>
)
