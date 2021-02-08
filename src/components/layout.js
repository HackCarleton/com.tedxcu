import React, {useState} from 'react';
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
  const [show, setShow] = useState(true);
  const banner = () => {
    if(show == true)  {
    return(
      <div className="bg-red-600 z-50">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-red-800">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">
                Tickets For Sale!
              </span>
              <span className="hidden md:inline">
                Buy tickets now on eventbrite
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a href="https://www.eventbrite.ca/e/tedxcarletonuniversity-presents-lightbulb-moments-virtual-conference-tickets-139574435895?fbclid=IwAR2DXgnCFRykETPAwT2-S1iFecnk8ebJATbLDF4Zbfyrf_qzL1cGt9Ijbk0" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50">
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" onClick={() => setShow(false)}>
              <span className="sr-only">Dismiss</span>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
    }
  }
  return (
    <div className="flex flex-col min-h-screen font-main max-w-screen bg-black">
         {/* <Slide down delay={300}> */}
       {banner()}

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
