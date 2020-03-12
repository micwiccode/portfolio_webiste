import { Link } from 'gatsby'
import React from 'react'
import '../css/header.scss'
import '../css/layout.scss'

const Header = () => (
  <header className="header">
    <h2 className="header__title">
      <Link to="/">
        Michał Wiczk
      </Link>
    </h2>
    <li className="header__nav">
      <Link to="/about">About me</Link>
      <Link to="/projects">My projects</Link>
      <Link to="/contact">Contact</Link>
    </li>
  </header>
)

export default Header
