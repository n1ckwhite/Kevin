import { FC } from 'react'

import { Subtitle } from '../Subtitle'

import { Title } from './components/Title/Title'
import s from './Times.module.css'
import { Task } from './components/Task'
import { Button } from '../Button'

interface ITimes {
}
export const Times: FC<ITimes> = () => (
  <div className={s.container}>
    <Title
      text="Наше решение "
      textColor="экономит"
      textColor2="ваше время"
    />
    <Subtitle text="*Возможна необходимость в корректировках полученного результата" />
    <div className={s.task}>
      <Task
        btnTitle="Задачи"
        fontSizeTask="small__size__task"
        text1="Определение демографии аудитории"
        text2="Определение интересов аудитории"
        text3="Составление портрета аудитории"
        text4="Выявление поведенческих паттернов"
      />
      <Task
        btnTitle="без Kevin"
        headerTask="gray__back__btn"
        mobile="mobile"
        text1="от 2 часов"
        text2="от 4 часов"
        text3="от 8 часов"
        text4="от 16 часов"
      />
      <Task
        btnTitle="c Kevin"
        colorText="green__back__text"
        headerTask="green__back__btn"
        text1="~ 1 минута"
        text2="~ 3 минуты"
        text3="~ 3 минуты"
        text4="~ 5 минут"
      />
    </div>
    <Button text="Перейти в телеграмм" />
  </div>
)
