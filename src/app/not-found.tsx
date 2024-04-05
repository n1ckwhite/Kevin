import './assets/styles/main.css'
import { CustomLink } from "./components/CustomLink"
import s from './styles/not-found.module.css'

const NotFoundPage = () => (
  <div className={s.error}>
    <h1 className={s.title}>404</h1>
    <p className={s.text}>
      Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
      существует. Возможно она устарела, была удалена, или был введен неверный
      адрес в адресной строке
    </p>
    <CustomLink text="Перейти на главную" />
  </div>
)

export default NotFoundPage
