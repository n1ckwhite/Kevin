import { FC } from 'react'
import cn from 'classnames'

import { HeaderTask } from '../HeaderTask'

import s from './Task.module.css'

interface IBook {
  text: string
  id: number
}

interface ITaskProps {
  books: IBook[]
  title: string
  color?: 'default' | 'green' | 'gray'
  size?: 'default' | 'small'
}

export const Task:FC<ITaskProps> = ({
  books,
  title,
  size = 'default',
  color = 'default',
}) => (
  <div className={s.card}>
    <HeaderTask
      background={color}
      text={title}
    />
    <ul className={cn(
      s.ul,
      color === 'green'
        && s.green__back__text,
      size === 'small'
        && s.small__size__task,
    )}
    >
      {books.map((txt) => (
        <li className={s.card__li} key={txt.id}>{txt.text}</li>
      ))}
    </ul>
  </div>
)
