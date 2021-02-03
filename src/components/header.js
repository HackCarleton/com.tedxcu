import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'

import Instagram from '../assets/social/instagram.png'
import Facebook from '../assets/social/facebook.png'
import Twitch from '../assets/social/twitch.png'
import Linkedin from '../assets/social/linkedin.png'
import Lightbulb from '../assets/social/lightbulb.png'

const Header = () => {
  return(
  <header className="max-w-screen md:max-xl flex flex-col md:flex-row mx-auto w-full fixed bg-white h-20 md:h-auto ">
    <div className="max-w-6xl flex flex-col md:flex-row mx-auto  m-4 w-full">
    <div className="w-1/3 text-tedx font-bold text-2xl ml-8 md:ml-0"><a href="/#" className=" p-2 bg-black rounded-full px-4">X</a></div>
    <div className="w-2/3  my-auto">
      <ul className="flex flex-row font-bold invisible md:visible">
        <a href="/#bulb" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4 ml-auto flex">
          <img src={Lightbulb} className="w-4 h-4 my-auto mr-2" />
          <h1>Lightbulb Moments</h1>
        </a>
        {/* <a href="/#stories" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4 ">Stories</a> */}
        <a href="/#speakers" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4 my-auto ">Speakers</a>
        <a href="/#team" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4  my-auto">Team</a>
        <a href="/#faq" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4 my-auto ">FAQ</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSffXa13uT0ewrTmrSH87v-vl5YDyH888WCX10OdCE1UaU5ZDw/viewform" className="hover:border-b-2 hover:border-tedx border-b-2 border-white mx-4  my-auto">Contact</a>
        <a href="https://www.instagram.com/tedxcarletonuniversity/" className="mt-1 ml-4 mr-1 "><img src={Instagram} className="w-2/3"/> </a>
        <a href="https://www.facebook.com/tedxcarleton" className="mt-1 mx-1 "><img src={Facebook} className="w-2/3"/> </a>
        <a href="" className="mt-1 mx-1 "><img src={Twitch} className="w-2/3"/> </a>
        <a href="https://www.linkedin.com/company/tedxcarletonuniversity/about/" className="mt-1 mx-1 "><img src={Linkedin} className="w-2/3"/> </a>
      </ul>
    </div>
   
    </div>
  </header>
//    <Menu right styles={ styles }>
//    <a id="home" className="menu-item" href="/">Home</a>
//    <a id="about" className="menu-item" href="/about">About</a>
//    <a id="contact" className="menu-item" href="/contact">Contact</a>
//    <a className="menu-item--small" href="">Settings</a>
// </Menu>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
