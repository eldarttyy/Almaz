import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { services } from '../data/siteData'

function ServicesPage() {
  useSeo(
    'Услуги — резка и бурение бетона',
    'Алмазная резка бетона, бурение, стенорезные работы и резка полов в Бишкеке. Полный цикл работ для промышленных, коммерческих и жилых объектов.',
  )

  return (
    <section className="section-wrap page-top">
      <div className="section-heading">
        <span className="eyebrow">Услуги</span>
        <h1>Профессиональные услуги резки бетона</h1>
        <p>
          Полный цикл работ по резке и бурению бетона для инфраструктуры, промышленных объектов, офисных зданий и
          реконструкций.
        </p>
        <p>
          Также выполняем резку железобетона, устройство бетонных проемов и бурение отверстий большого диаметра.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service.slug}>
            <img src={service.image} alt={service.title} loading="lazy" />
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>{service.details}</p>
              <Link to={`/services/${service.slug}`} className="btn btn-link">
                Подробнее
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
