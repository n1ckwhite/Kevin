import { FC } from 'react'

import { BOOK } from '@/constans'

import { Subtitle } from '../Subtitle'
import { CustomLink } from '../CustomLink'

import { Task } from './components/Task'
import { TimesTitle } from './components/TimesTitle'
import s from './Times.module.css'

export const Times: FC = () => (
  <div className={s.container}>
    <TimesTitle
      strong="экономит ваше время"
      text="Наше решение "
    />
    <Subtitle
      text="*Возможна необходимость в корректировках полученного результата"
    />
    <ul className={s.tasks}>
      <Task
        books={BOOK.tasks}
        color="default"
        size="small"
        title="Задачи"
      />
      <Task
        books={BOOK.hours}
        color="gray"
        title="без Kevin"
      />
      <Task
        books={BOOK.minutes}
        color="green"
        title="c Kevin"
      />
    </ul>
    <CustomLink
      classname={s.btn}
      text="Перейти в телеграмм"
    />
  </div>
)
