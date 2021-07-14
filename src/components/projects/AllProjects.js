import React, { useEffect, useState } from 'react'

import Navigation from '../navigation/Navigation'
import sanityClient from '../../client'
import ProjectCard from './ProjectCard'
import './projects.css'

export default function AllProjects() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(publishedAt) {
          title,
          slug,
          description,
          webpage,
          github,
          githubSecondary,
          playstore,
          tags,
          body,
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
    <>
      <Navigation />
      <section>
        <h2 className="projects__title">PROJECTS</h2>
        <div className="projects__container">
          {projects.map(project =>
            <ProjectCard key={project.slug.current} project={project}/>
          )}
        </div>
      </section>
    </>
  )
}
