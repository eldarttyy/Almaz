import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'

function NotFoundPage() {
  useSeo('Страница не найдена', undefined, { noIndex: true })

  return (
    <section className="section-wrap page-top">
      <h1>Страница не найдена</h1>
      <p>Запрошенная страница не существует.</p>
      <Link to="/" className="btn btn-link">
        Вернуться на главную
      </Link>
    </section>
  )
}

export default NotFoundPage
