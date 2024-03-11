import { FC } from 'react'

import { Subtitle } from '../Subtitle'
import { Button } from '../Button'

import { Task } from './components/Task'
import { Title } from './components/Title'
import s from './Times.module.css'

const book = {
  tasks: [
    'Определение демографии аудитории',
    'Определение интересов аудитории',
    'Составление портрета аудитории',
    'Выявление поведенческих паттернов',
  ],
  hours: [
    'от 2 часов',
    'от 4 часов',
    'от 8 часов',
    'от 16 часов',
  ],
  minutes: [
    '~ 1 минута',
    '~ 3 минуты',
    '~ 3 минуты',
    '~ 5 минут',
  ],
}

export const Times: FC = () => (
  <div className={s.container}>
    <Title
      text="Наше решение "
      textColor="экономит"
      textColorTwo="ваше время"
    />
    <Subtitle text="*Возможна необходимость в корректировках полученного результата" />
    <div className={s.task}>
      <Task
        book={book.tasks}
        btnTitle="Задачи"
        color="default"
        fontSizeTask="small"
      />
      <Task
        book={book.hours}
        btnTitle="без Kevin"
        color="gray"
        mobile="mobile"
      />
      <Task
        book={book.minutes}
        btnTitle="c Kevin"
        color="green"
      />
    </div>
    <Button classname={s.btn} text="Перейти в телеграмм" />
  </div>
)
