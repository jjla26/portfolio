import React from 'react'

import './navigation.css'

export default function Navigation() {
  return (
    <header className="header">
      <a className="header__title" href="index.html"><h1>JULIO J. LOPEZ A.</h1></a>
      <h3>Full Stack Web Developer</h3>
      <nav>
        <ul className="navigation">
          <li role="presentation" className="navigation-list__item">
              <a href="#profile" >Home</a>
          </li>
          <li role="presentation" className="navigation-list__item">
              <a href="#about" >About</a>
          </li>
          <li role="presentation" className="navigation-list__item">
              <a href="#project" >Work</a>
          </li>
          <li role="presentation" className="navigation-list__item">
              <a href="#contact" >Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
