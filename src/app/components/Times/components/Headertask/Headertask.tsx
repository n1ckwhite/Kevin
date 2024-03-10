import { FC } from 'react'
import cn from 'classnames'

import s from './Headertask.module.css'

interface IButtonBackground {
  btnTitle: string,
  background?: 'green__back__btn' | 'gray__back__btn'
}

export const Headertask: FC<IButtonBackground> = ({ background, btnTitle }) => (
  <button
    className={cn(
      s.btn,
      background === 'gray__back__btn'
      && s.gray__back__btn,
      background === 'green__back__btn'
      && s.green__back__btn,
    )}
  >
    { btnTitle }
  </button>
)
