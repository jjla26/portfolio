import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../../client'
import Navigation from '../navigation/Navigation'
import './singleproject.css'


export default function SingleProject() {
  const [ project, setProject ] = useState(null)
  const { id } = useParams()
  console.log(project, id)

  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == "${id}"]{
        title,
        slug,
        tags,
        publishedAt,
        projectType,
        body
      }`
    )
    .then(data => setProject(data[0]))
    .catch(error => error )
  
  }, [id])

  if(!project) return <div></div>

  return (
    <>
    <Navigation />
    <section class="single-project">
      <div class="single-content">
        <h1>{project.title}</h1>
        <div>
          <span><strong>Published at:</strong> {new Date(project.publishedAt).toLocaleDateString()} </span>
          <span><strong>Project Type:</strong> {project.projectType} </span><br />
        </div>
        <BlockContent 
          blocks={project.body}
          projectId='dqkk8vgs'
          dataset='production'
        />
      </div>
    </section>
    </>
  )
}
