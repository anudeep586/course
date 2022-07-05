import React from 'react'
import './header.css';
import Navbar from '../navbar/navbar'
const Header = () => {
  return (
    <section className="header">
    <section className="header-top">
      <section className="header-top__logo">
        <a href="/" className="header-logo">LOGO</a>
      </section>
      <section className="header-top__navbar">
        <section className="header-top__navigation">
          <Navbar />
        </section>
        <hr className="header-top__seperator" />
      </section>
    </section>
    <section className="header-bottom">
      <section className="header-bottom__phone">
        9390616131
      </section>
      <section className="header-bottom__email">
        lakanavarapu.manikanta@zopsmart.com
      </section>
    </section>
  </section>
  )
}

export default Header