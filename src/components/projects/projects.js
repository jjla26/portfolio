import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import sanityClient from '../../client'
import ProjectCard from './ProjectCard'
import './projects.css'

export default function Projects() {
  const [ projects, setProjects ] = useState([])
  console.log(projects)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && main == true] | order(publishedAt) {
          title,
          slug,
          description,
          webpage,
          github,
          githubSecondary,
          playstore,
          tags,
          publishedAt,
          projectType,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">PROJECTS</h2>
      <div className="projects__container">
        {projects.map(project =>
          <ProjectCard project={project}/>
        )}
        <Link to="/projects">sell all the projects</Link>
      </div>
    </section>
  )
}
