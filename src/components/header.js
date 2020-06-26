import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import '../css/header.scss'
import '../css/layout.scss'

const Header = () => {
  const [scrolledValue, setScrolledValue] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      scrolledValue < currentScroll ?  setIsHeaderVisible(false) : setIsHeaderVisible(true)
      setScrolledValue(currentScroll)
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolledValue, isHeaderVisible])

  return (
    <header data-active={!isHeaderVisible} className="header">
      <h2 className="header__title">
        <Link to="/">Michał Wiczk</Link>
      </h2>
      <li className="header__nav">
        <Link to="/about">About me</Link>
        <Link to="/projects">My projects</Link>
        <Link to="/contact">Contact</Link>
      </li>
    </header>
  )
}

export default Header
