import { FC } from 'react'
import cn from 'classnames'

import { HeaderTask } from '../HeaderTask'

import s from './Task.module.css'

interface IBook {
  text: string;
  id: number;
}

interface ITask {
  book: IBook[],
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
        {book.map((txt) => (
          <li key={txt.id}>{txt.text}</li>
        ))}
      </ul>
    </div>
  </div>
)
