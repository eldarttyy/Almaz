import { Link, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services } from '../data/siteData'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  useSeo(
    service ? `${service.title} в Бишкеке` : 'Услуга не найдена',
    service ? service.description : undefined,
  )

  if (!service) {
    return (
      <section className="section-wrap page-top">
        <h1>Услуга не найдена</h1>
        <Link to="/services" className="btn btn-link">
          Назад к услугам
        </Link>
      </section>
    )
  }

  return (
    <section className="section-wrap page-top detail-page">
      <img src={service.image} alt={service.title} className="detail-image" />
      <div className="section-heading">
        <span className="eyebrow">Детали услуги</span>
        <h1>{service.title}</h1>
      </div>
      <p>{service.description}</p>
      <p>{service.details}</p>
      <Link to="/contact#contact-form" className="btn btn-primary">
        ПОЛУЧИТЬ СМЕТУ
      </Link>
    </section>
  )
}

export default ServiceDetailPage
