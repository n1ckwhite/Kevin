import { FC } from 'react'
import cn from 'classnames'

import { HeaderTask } from '../Headertask'

import s from './Task.module.css'

interface ITask {
  book: string[],
  btnTitle: string,
  color?: 'default' | 'green' | 'gray',
  fontSizeTask?: 'default' | 'small'
  mobile?: string
}

export const Task:FC<ITask> = ({
  book,
  btnTitle,
  fontSizeTask = 'default',
  color = 'default',
  mobile,
}) => (
  <div className={cn(mobile && s.mobile)}>
    <div className={s.card}>
      <HeaderTask
        background={color}
        text={btnTitle}
      />
      <ul className={cn(
        s.ul,
        color === 'green' && s.green__back__text,
        fontSizeTask === 'small'
        && s.small__size__task,
      )}
      >
        {book.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  </div>
)
