import React from 'react'
import '../css/footer.scss'
const githubImage = require('../images/GitHub-Mark-Light-32px.png')
const linkedinImage = require('../images/LI-In-Bug.png')
const postImage = require('../images/103176-32.png')


const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()}, Michał Wiczk. All rights reserved</p>
      <a href='https://github.com/micwiccode'><img className='logo' src={githubImage} alt="GitHub"/></a>
      <a href='https://www.linkedin.com/in/micha%C5%82-wiczk-4a0ab01a3'><img className='logo' src={linkedinImage} alt="GitHub"/></a>
      <a href='mailto:m.wiczk@wp.pl'><img className='logo' src={postImage} alt="GitHub"/></a>
    </footer>
  )
}

export default Footer
