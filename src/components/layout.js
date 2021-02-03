import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SEO from '../components/seo';
import Header from './header';

// import Valerian from '../images/valerian.png'

const Layout = ({children}) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div className="flex flex-col min-h-screen font-main max-w-screen bg-black">
         {/* <Slide down delay={300}> */}
        <Header />
      {/* </Slide> */}
      {/* <Fade delay={1000}> */}
        <main className="flex flex-col w-full mx-auto max-w-screen">
        {children}
      </main>
      {/* </Fade> */}
      <footer id="courses" className="bg-gray-800 text-white">
        <div className="max-w-md md:max-w-xl mx-auto text-center my-4 text-xs md:text-lg">
          <h1>Made with ☕️ and ❤️ by students at Carleton U</h1>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
