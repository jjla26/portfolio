import React from 'react'
import { Link } from 'react-router-dom'

import './projects.css'

export default function projectCard(props) {
  const { project } = props

  return (
    <div key={project.slug.current} className="project__card">
      <img src={project.mainImage.asset.url} alt="aguacate project"/>
      <div className="project__content">
        <div className="card__title">
          <h3><strong>{project.title}</strong></h3>
        </div>
        <div className="project__info">
          <span><strong>Published at:</strong> {new Date(project.publishedAt).toLocaleDateString()} </span>
          <span><strong>Type:</strong> {project.projectType} </span><br />
          {project.tags.map(tag => <span className="tags" key={tag}>{tag}</span>)}
        </div>
        <div className="project__description">
          <p>{project.description}</p>
        </div>
        <div>
          {project.webpage && <div><a className="projects__links" href={project.webpage} target="___black">Visit Webpage</a></div>}
          {project.githubSecondary ? <div><a className="projects__links" href={project.github} target="___black">Source Code Frontend</a></div> : project.github && <div><a href={project.github} target="___black">Source Code</a></div> }
          {project.githubSecondary && <div><a className="projects__links" href={project.github} target="___black">Source Code Backend</a></div>}
          {project.playstore && <div><a className="projects__links" href={project.webpage} target="___black">Playstore</a></div>}
          {project.body && <div><Link a className="projects__links" to={`/projects/${project.slug.current}`}>See case study</Link></div>}
        </div>
      </div>
    </div> 
  )
}
