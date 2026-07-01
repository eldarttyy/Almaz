import EstimateForm from '../components/EstimateForm'
import useSeo from '../hooks/useSeo'
import { contactInfo } from '../data/siteData'

function ContactPage() {
  useSeo(
    'Контакты — бесплатная смета',
    'Свяжитесь с нами для расчёта стоимости алмазной резки и бурения бетона в Бишкеке: телефон, email, WhatsApp или форма заявки.',
  )

  return (
    <section className="section-wrap page-top">
      <div className="section-heading">
        <span className="eyebrow">Контакты</span>
        <h1>Получите быстрый расчет стоимости</h1>
        <p>Свяжитесь с нами по телефону, email, в WhatsApp или отправьте описание проекта через форму ниже.</p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <h3>Контактная информация</h3>
          <ul>
            <li>
              Телефон: <a href={contactInfo.phoneLink}>{contactInfo.phoneDisplay}</a>
            </li>
            <li>
              Email: <a href={contactInfo.emailLink}>{contactInfo.email}</a>
            </li>
            <li>
              WhatsApp:{' '}
              <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li>
              Адрес:{' '}
              <a href={contactInfo.locationLink} target="_blank" rel="noreferrer">
                {contactInfo.locationText}
              </a>
            </li>
          </ul>
          <a href={contactInfo.locationLink} target="_blank" rel="noreferrer" className="btn btn-link">
            Открыть в Google Maps
          </a>
        </article>

        <EstimateForm title="Запросить бесплатную смету" compact />
      </div>

      <div className="map-wrap">
        <iframe
          title="Карта — Бишкек"
          src={contactInfo.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default ContactPage
