import { Link, useParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { projects } from '../data/siteData'

function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = projects.find((item) => item.slug === projectSlug)

  useSeo(
    project ? project.title : 'Проект не найден',
    project ? project.description : undefined,
  )

  if (!project) {
    return (
      <section className="section-wrap page-top">
        <h1>Проект не найден</h1>
        <Link to="/projects" className="btn btn-link">
          Назад к проектам
        </Link>
      </section>
    )
  }

  return (
    <section className="section-wrap page-top detail-page">
      <img src={project.image} alt={project.title} className="detail-image" />
      <div className="section-heading">
        <span className="eyebrow">Детали проекта</span>
        <h1>{project.title}</h1>
      </div>
      <p>{project.description}</p>
      <ul className="detail-meta">
        <li>
          <strong>Локация:</strong> {project.location}
        </li>
        <li>
          <strong>Выполненные работы:</strong> {project.completed}
        </li>
      </ul>
      <Link to="/contact#contact-form" className="btn btn-primary">
        Обсудить похожий проект
      </Link>
    </section>
  )
}

export default ProjectDetailPage
