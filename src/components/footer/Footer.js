import React from 'react'

import linkedinIcon from '../../img/linkedin.svg'
import githubIcon from '../../img/github.svg'
import stackoverflowIcon from '../../img/stackoverflow.svg'
import './footer.css'

export default function Footer(props) {
  const { dark } = props 

  return (
    <footer className='footer'>
      <div className='social__container'>
        <a className='social__link' href='https://www.linkedin.com/in/juliojla/' target='_blank' rel='noreferrer'>
          <img className={dark ? 'social__icon--dark' : ''} src={linkedinIcon} alt='linkedin icon' />
        </a>
        <a className='social__link' href='https://github.com/jjla26' target='_blank' rel='noreferrer'>
          <img className={dark ? 'social__icon--dark' : ''} src={githubIcon} alt='linkedin icon' />
        </a>
        <a className='social__link' href='https://stackoverflow.com/users/8151873/julio-lopez' target='_blank' rel='noreferrer'>
          <img className={dark ? 'social__icon--dark' : ''} src={stackoverflowIcon} alt='linkedin icon' />
        </a>
      </div>
      <p>JULIO LOPEZ ©2021</p>
    </footer>
  )
}
