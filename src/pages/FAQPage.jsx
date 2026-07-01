import useSeo from '../hooks/useSeo'
import { faqItems } from '../data/siteData'

function FAQPage() {
  useSeo(
    'Частые вопросы',
    'Ответы на частые вопросы об алмазной резке и бурении бетона в Бишкеке: зона работы, безопасность, сроки сметы.',
  )

  return (
    <section className="section-wrap page-top">
      <div className="section-heading">
        <span className="eyebrow">FAQ</span>
        <h1>Часто задаваемые вопросы</h1>
      </div>

      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQPage
