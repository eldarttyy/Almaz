import { useState } from 'react'

// Get a free access key at https://web3forms.com — enter eldarttyy@proton.me,
// then paste the key it emails you here. Submissions are delivered to that address.
const WEB3FORMS_ACCESS_KEY = '3fac5c04-5a26-4fcf-8375-33ac3d60c24e'

const initialData = {
  fullName: '',
  phone: '',
  email: '',
  projectType: 'Жилой',
  description: '',
  botcheck: '',
}

function EstimateForm({ title = 'Запросить бесплатную смету', compact = false }) {
  const [formData, setFormData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Заявка на смету — ${formData.fullName}`,
          from_name: 'Сайт: Алмазная резка бетона',
          botcheck: formData.botcheck, // honeypot: real users leave this empty
          ФИО: formData.fullName,
          Телефон: formData.phone,
          Email: formData.email || '—',
          'Тип проекта': formData.projectType,
          Описание: formData.description,
        }),
      })

      const result = await response.json()
      if (!result.success) {
        throw new Error(result.message || 'Ошибка отправки')
      }

      setSubmitted(true)
      setFormData(initialData)
      window.setTimeout(() => setSubmitted(false), 4500)
    } catch (submitError) {
      console.error('Ошибка отправки заявки', submitError)
      setError('Не удалось отправить заявку. Попробуйте позвонить нам или написать в WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={`estimate-card ${compact ? 'estimate-card-compact' : ''}`}>
      <h3>{title}</h3>
      <p>Опишите ваш проект, и наша команда быстро свяжется с вами.</p>
      <form onSubmit={handleSubmit} className="estimate-form" id="contact-form">
        <label>
          ФИО
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Номер телефона
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputMode="tel"
            autoComplete="tel"
            placeholder="0500 00 00 00"
            required
          />
        </label>

        <label>
          Электронная почта <span className="field-optional">(необязательно)</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>

        {/* Honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="botcheck"
          value={formData.botcheck}
          onChange={handleChange}
          className="hp-field"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <label>
          Тип проекта
          <select name="projectType" value={formData.projectType} onChange={handleChange}>
            <option value="Жилой">Жилой</option>
            <option value="Коммерческий">Коммерческий</option>
            <option value="Промышленный">Промышленный</option>
            <option value="Государственный">Государственный</option>
          </select>
        </label>

        <label>
          Описание
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </label>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'ОТПРАВКА…' : 'ПОЛУЧИТЬ СМЕТУ'}
        </button>
      </form>
      <div aria-live="polite" role="status">
        {submitted ? <div className="form-success">Спасибо. Ваша заявка успешно отправлена.</div> : null}
        {error ? <div className="form-error">{error}</div> : null}
      </div>
    </section>
  )
}

export default EstimateForm
