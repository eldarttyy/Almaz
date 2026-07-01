import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { projects } from '../data/siteData'

function ProjectsPage() {
  useSeo(
    'Проекты — портфолио работ',
    'Примеры выполненных работ по алмазной резке и бурению бетона в Бишкеке: резка полов, проемы, бурение несущих стен.',
  )

  return (
    <section className="section-wrap page-top">
      <div className="section-heading">
        <span className="eyebrow">Проекты</span>
        <h1>Портфолио по резке бетона</h1>
        <p>Примеры выполненных работ в промышленном и коммерческом строительстве.</p>
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
  )
}

export default ProjectsPage
