import React from 'react'
import logoWhite from '../assets/01-logo@2x.png'
import logoBlack from '../assets/01-logo@2x_grey.png'
import '../styles/Header.css'
const config = window.config

function Header() {
  const vars = config ? config : process.env
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
  const logo = darkMode.matches ? logoBlack : logoWhite

  return (
    <div className="header_container">
      <header className="content_container">
        <div className="center_name">
          Diamond Way Buddhist Center {vars.REACT_APP_CITY}
        </div>
        <div
          style={{
            marginLeft: 'auto',
            background: `url(${logo}) no-repeat left top / 235px 47px`,
            width: '235px',
            position: 'relative',
            top: '23px',
          }}
        />
      </header>
      <div className="center_name_mobile">
        Diamond Way Buddhist Center {vars.REACT_APP_CITY}
      </div>
    </div>
  )
}

export default Header
