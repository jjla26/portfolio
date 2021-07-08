import React from 'react'

import profileImg from '../../img/profile.png'
import './banner.css'

export default function Banner() {
  return (
    <section id='banner' className='banner'>
      <div className='banner__container'>
        <div className='banner__content'>
          <div className='banner__title'>
            <h2>julioLopez.is()</h2>
          </div>
          <div className='banner__description'>
            <p>A Full Stack Web Developer that loves learning something new everyday.</p>
            <p>I'm interested in building user friendly and challenging applications.</p>
            <p>I consider myself a team worker who loves challenges.</p>
            <span><a href='https://github.com/jjla26' target='_blank' rel='noreferrer' >Sample-codes</a></span>
            <span>|</span>
            <span><a href='mailto:julioj.lopeza@gmail.com?subject=I%20am%20interested%20in%20your%20work!&body=Hi%20Julio,' >Get in touch</a></span>
          </div>
        </div>
        <div>
          <img className='banner__portrait' src={profileImg} alt='Photograph of julio' />
        </div>
      </div>
    </section>
  )
}
