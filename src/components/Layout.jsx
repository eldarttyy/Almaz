import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BRAND, TAGLINE, contactInfo, services } from '../data/siteData'

const navItems = [
  { label: 'ГЛАВНАЯ', to: '/' },
  { label: 'УСЛУГИ', to: '/services' },
  { label: 'ПРОЕКТЫ', to: '/projects' },
  { label: 'КОНТАКТЫ', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
]

function Layout() {
  return (
    <>
      <header>
        <div className="top-bar">
          <a href={contactInfo.locationLink} target="_blank" rel="noreferrer" className="top-item">
            <HiOutlineLocationMarker />
            <span>{contactInfo.locationText}</span>
          </a>
          <a href={contactInfo.phoneLink} className="top-item">
            <HiOutlinePhone />
            <span>{contactInfo.phoneDisplay}</span>
          </a>
          <a href={contactInfo.emailLink} className="top-item">
            <HiOutlineMail />
            <span>{contactInfo.email}</span>
          </a>
          <div className="social-links" aria-label="Социальные сети">
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="main-nav-wrap">
          <Link to="/" className="logo" aria-label={`${BRAND} — на главную`}>
            <span className="logo-mark">{BRAND}</span>
            <span className="logo-tagline">{TAGLINE}</span>
          </Link>
          <nav className="main-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <h4>{BRAND}</h4>
          <p>Профессиональная алмазная резка бетона и бурение в Бишкеке для коммерческих, промышленных и инфраструктурных объектов.</p>
        </div>

        <div>
          <h5>Быстрые ссылки</h5>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Услуги</h5>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Контакты</h5>
          <ul>
            <li>
              <a href={contactInfo.phoneLink}>{contactInfo.phoneDisplay}</a>
            </li>
            <li>
              <a href={contactInfo.emailLink}>{contactInfo.email}</a>
            </li>
            <li>
              <a href={contactInfo.locationLink} target="_blank" rel="noreferrer">
                {contactInfo.locationText}
              </a>
            </li>
            <li>
              <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="social-links footer-social" aria-label="Социальные сети в футере">
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={contactInfo.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">© {new Date().getFullYear()} {BRAND}. Все права защищены.</div>

      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab"
        aria-label="Написать в WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  )
}

export default Layout
