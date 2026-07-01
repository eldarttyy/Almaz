import { Link } from 'react-router-dom'
import EstimateForm from '../components/EstimateForm'
import useSeo from '../hooks/useSeo'
import { contactInfo, projects, services } from '../data/siteData'

const trustItems = [
  '★★★★★ Рейтинг 5.0',
  '500+ завершенных проектов',
  'Быстрый отклик',
  'Профессиональное оборудование',
  'Лицензировано и застраховано',
  'Работаем по всему Кыргызстану',
]

const whyChooseUs = [
  'Современное оборудование',
  'Быстрые сроки выполнения',
  'Технология пылеконтроля',
  'Опытная команда',
  'Точная резка',
  'Конкурентные цены',
]

function HomePage() {
  useSeo('Алмазная резка бетона и бурение в Бишкеке')

  const scrollToForm = () => {
    const target = document.getElementById('contact-form')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero-backdrop"></div>
        <div className="hero-content">
          <span className="hero-badge">Профессиональные услуги алмазной резки бетона в Кыргызстане</span>
          <h1>Алмазная резка бетона и бурение в Бишкеке</h1>
          <p>
            Профессиональная алмазная резка, бурение бетона, резка железобетона и стенорезные работы в Бишкеке и по
            всему Кыргызстану.
          </p>
          <div className="hero-actions">
            <button onClick={scrollToForm} className="btn btn-primary" type="button">
              ПОЛУЧИТЬ СМЕТУ
            </button>
            <a href={contactInfo.phoneLink} className="btn btn-outline">
              ПОЗВОНИТЬ СЕЙЧАС
            </a>
          </div>
        </div>
        <EstimateForm />
      </section>

      <section className="trust-grid">
        {trustItems.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </section>

      <section className="section-wrap">
        <div className="section-heading">
          <span className="eyebrow">Наши услуги</span>
          <h2>Профессиональные решения по бетону</h2>
          <p>Надежные работы по резке и бурению для жилых, коммерческих и промышленных объектов.</p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <img src={service.image} alt={service.title} loading="lazy" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${service.slug}`} className="btn btn-link">
                  Подробнее
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading">
          <span className="eyebrow">Наши проекты</span>
          <h2>Результаты в промышленном и коммерческом секторе</h2>
        </div>
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  <li>{project.location}</li>
                  <li>{project.completed}</li>
                </ul>
                <Link className="btn btn-link" to={`/projects/${project.slug}`}>
                  Смотреть проект
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap why-us">
        <div className="section-heading">
          <span className="eyebrow">Почему выбирают нас</span>
          <h2>Точность, безопасность и скорость</h2>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article key={item}>
              <span>✓</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
