import { FC } from 'react'
import cn from 'classnames'

import { Headertask } from '../Headertask'

import s from './Task.module.css'

interface ITask {
  text1: string,
  text2: string,
  text3: string,
  text4: string,
  btnTitle: string,
  headerTask?: 'gray__back__btn' | 'green__back__btn',
  colorText?: 'default__text' | 'green__back__text',
  fontSizeTask?: 'default__size__task' | 'small__size__task'
  mobile?: string
}

export const Task:FC<ITask> = ({
  text1, text2, text3, text4, btnTitle, headerTask, colorText, fontSizeTask, mobile,
}) => (
  <div className={cn(mobile && s.mobile)}>
    <div className={s.card}>
      <Headertask background={headerTask} btnTitle={btnTitle} />
      <ul className={cn(
        s.ul,
        colorText === 'green__back__text'
        && s.green__back__text,
        fontSizeTask === 'small__size__task'
        && s.small__size__task,
      )}
      >
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
      </ul>
    </div>
  </div>
)
