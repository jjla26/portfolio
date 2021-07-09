import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './navigation.css'

export default function Navigation() {
  const { hash } = useLocation()

  useEffect(() => {
    if(hash === ''){
      window.scrollTo(0, 0);
    }else{
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 500)
    }
  }, [hash])

  return (
    <header className="header">
      <Link className="header__title" to="/"><h1>JULIO J. LOPEZ A.</h1></Link>
      <h3>Full Stack Web Developer</h3>
      <nav>
        <ul className="navigation">
          <li role="presentation" className="navigation-list__item">
              <Link to="/" >Home</Link>
          </li>
          <li role="presentation" className="navigation-list__item">
              <Link to="/#about" >About</Link>
          </li>
          <li role="presentation" className="navigation-list__item">
              <Link to="/projects" >Work</Link>
          </li>
          <li role="presentation" className="navigation-list__item">
              <Link to="/#contact" >Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
