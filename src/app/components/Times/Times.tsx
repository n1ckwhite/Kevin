import { FC } from 'react'

import { BOOK } from '@/constans'

import { Subtitle } from '../Subtitle'
import { Button } from '../Button'

import { Task } from './components/Task'
import { TimesTitle } from './components/TimesTitle'
import s from './Times.module.css'

export const Times: FC = () => (
  <div className={s.container}>
    <TimesTitle
      text="Наше решение "
      textColor="экономит"
      textColorTwo="ваше время"
    />
    <Subtitle text="*Возможна необходимость в корректировках полученного результата" />
    <div className={s.task}>
      <Task
        book={BOOK.tasks}
        btnTitle="Задачи"
        color="default"
        fontSizeTask="small"
      />
      <Task
        book={BOOK.hours}
        btnTitle="без Kevin"
        color="gray"
        mobile="mobile"
      />
      <Task
        book={BOOK.minutes}
        btnTitle="c Kevin"
        color="green"
      />
    </div>
    <Button classname={s.btn} text="Перейти в телеграмм" />
  </div>
)
