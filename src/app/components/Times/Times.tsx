import { FC } from 'react'

import { SubTitle } from '../SubTitle/SubTitle'

import { Title } from './components/Title/Title'
import s from './Times.module.css'
import { Task } from './components/Task/Task'

interface ITimes {
}
export const Times: FC<ITimes> = () => (
  <div className={s.container}>
    <Title
      text="Наше решение "
      textColor="экономит"
      textColor2="ваше время"
    />
    <SubTitle text="*Возможна необходимость в корректировках полученного результата" />
    <div className={s.task}>
      <Task
        btnTitle="Задачи"
        text1="Определение демографии аудитории"
        text2="Определение интересов аудитории"
        text3="Составление портрета аудитории"
        text4="Выявление поведенческих паттернов"
      />
      <Task
        btnTitle="без Kevin"
        text1="от 2 часов"
        text2="от 4 часов"
        text3="от 8 часов"
        text4="от 16 часов"
      />
      <Task
        btnTitle="c Kevin"
        text1="~ 1 минута"
        text2="~ 3 минута"
        text3="~ 3 минута"
        text4="~ 5 минута"
      />
    </div>
  </div>
)
