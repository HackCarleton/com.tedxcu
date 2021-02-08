import React, { useState, setDisabled, setMessage } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import One from '../assets/gifs/1.gif'
import Two from '../assets/gifs/2.gif'
import Three from '../assets/gifs/3.gif'
import Four from '../assets/gifs/4.gif'
import Five from '../assets/gifs/5.gif'
import Six from '../assets/gifs/6.gif'
import Seven from '../assets/gifs/7.gif'
import Eight from '../assets/gifs/8.gif'
import Nine from '../assets/gifs/9.gif'

import Girl from '../assets/event/girl.jpg'
import SmilingGuy from '../assets/event/smiling-guy.jpg'
import Jim from '../assets/event/jim.jpg'
import Blue from '../assets/event/blue.jpg'
import Choir from '../assets/event/choir.jpg'
import Cool from '../assets/event/cool.jpg'
import GirlSpeaker from '../assets/event/girl-speaker.jpg'
import Sit from '../assets/event/sit.jpg'

import Team from '../assets/team.jpg'

import Vid from '../assets/vi.gif'

import Audience from '../assets/audience.png'

import Edison from '../assets/edison.jpeg'

import ExecOne from '../assets/exec/1.png'
import ExecTwo from '../assets/exec/2.png'
import ExecThree from '../assets/exec/3.png'
import ExecFour from '../assets/exec/4.png'
import ExecFive from '../assets/exec/5.png'
import ExecSix from '../assets/exec/6.png'
import ExecSeven from '../assets/exec/7.png'
import ExecEight from '../assets/exec/8.png'

import LightBulb from '../assets/main.png'

import '../styles/tailwind.css'

const IndexPage = () => {
  var ReactRotatingText = require('react-rotating-text');
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [disabled, setDisabled] = useState(false)
  
    const handleSubmit = event => {
      event.preventDefault()
      setDisabled(true)
      setMessage("Sending...")
      const response = addToMailchimp(email)
        console.log(response);
      if (response.result === "error") {
        if (response.msg.toLowerCase().includes("already subscribed")) {
          setMessage("You're already on to the list!")
        } else {
          setMessage("Something is wrong. Try Again")
        }
        setDisabled(false)
      } else {
        setMessage(
          "Sent ... Thanks for signing up !"
        )
      }
  
    }
  
  return (
  <Layout>
    <section className="h-screen bg-black bg-cover" style={{ backgroundImage:`url(${Audience})` }}>
       <div className="max-w-xs md:max-w-5xl mx-auto mt-64 ">
         <div className="max-w-2xl mx-auto text-left">
          <h1 className="text-2xl md:text-5xl font-bold text-tedx"> 
          <ReactRotatingText 
            items={[
              'get inspired',
              'learn new things',
              'meet people'
            ]}
            className="inline text-blue ml-1"
            color=""
          />
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold text-white">at TED<span className="text-white">x</span>CarletonUniversity</h1>
          <h1 className="text-md md:text-2xl font-bold text-tedx">x = independently organized event</h1>
          <h1 className="text-sm md:text-md text-white font-bold mt-4">March 6th, 2021 • Main Conference</h1>
          <div className="text-md text-white">
            <form onSubmit={handleSubmit} className="mt-4 flex">
            <input 
              className="mr-6 bg-gray-200 appearance-none max-w-md w-full px-1 md:px-4 rounded-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              type="email"
              aria-label="Email address"
              onChange={event => setEmail(event.target.value)}
              required
              placeholder="Enter your email to be reminded of events"
              />
            <button disabled={disabled} className="mr-auto shadow bg-tedx hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded-full h-16 w-16 flex items-center justify-center" type="button">
             {">"}
            </button>
            </form>
            <h1 className="mt-4">{message}</h1>
          </div>
         </div>
       </div>
    </section>
    {/* <section className="bg-black">
      <div className="max-w-full mx-auto flex px-8">
        <div className="flex flex-row">
          <div className="w-1/12 my-auto mr-16"><img src={Girl} className="rounded-lg"/></div>
        <div className="w-1/12 mt-auto mr-16"><img src={GirlSpeaker} className="rounded-lg"/></div>
        <div className="w-1/12 mr-16">
            <img src={SmilingGuy}  className="rounded-lg mb-4"/>
            <img src={Jim} className="mt-4 rounded-lg"/>
          </div>
        <div className="w-1/12 mb-auto mr-16"><img src={Choir} className="rounded-lg"/></div>
        <div className="w-1/12 my-auto mr-16"><img src={Blue} className="rounded-lg"/></div>
        <div className="w-1/12 mb-auto mr-16"><img src={Cool} className="rounded-lg"/></div>
        
        <div className="w-1/12 mr-16">
            <img src={SmilingGuy}  className="rounded-lg mb-4"/>
            <img src={Jim} className="mt-4 rounded-lg"/>
          </div>
        <div className="w-1/12 mt-auto mr-16"><img src={Choir} className="rounded-lg"/></div>
        <div className="w-1/12 my-auto "><img src={Sit} className="rounded-lg"/></div>
        </div>
      </div>
    </section> */}
    <section className="bg-black " id="bulb">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row my-32">
        <div className="mr-auto max-w-2xl text-white my-auto">
        <h1 className="mb-4 font-bold text-white text-2xl flex flex-row">
          <div className="w-4 bg-tedx h-1 my-auto md:mr-2 mx-auto md:ml-0"></div>
          <h1 className="text-xl md:text-4xl font-bold mr-auto md:mr-0">TEDx — Ideas Worth Spreading</h1>
        </h1>
          <h1 className=""></h1>
          <p className="text-md md:text-xl px-6 md:px-0">
            TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
            TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
            and today covers almost all topics — from science to business to global issues — in more than 110 languages. 
            Meanwhile, independently run TEDx events help share ideas in communities around the world. 
          </p>
        </div>
        <div className="my-auto ml-auto">
        <div className="grid grid-cols-3 gap-1 ml-auto w-10/12 mx-auto md:ml-auto mb-8 md:mb-0">
          <img src={One} className=" rounded"/>
          <img src={Two}  className="rounded"/>
          <img src={Three}  className="rounded"/>
          <img src={Four} className=" rounded" />
          <img src={Five} className=" rounded" />
          <img src={Six}  className=" rounded"/>
          <img src={Seven}  className=" rounded"/>
          <img src={Eight} className=" rounded" />
          <img src={Nine}  className=" rounded"/>
        </div>
        </div>
      </div>
    </section>
    <section className="flex bg-black">
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-7xl mt-16 mb-32">
        <div className="w-full md:w-1/2 mx-auto md:mx-0 mb-8 md:mb-0 px-8 md:px-0">
          <img src={Edison} />
        </div>
        <div className="ml-auto w-full md:w-1/2 text-white my-auto">
        <h1 className="mb-4 font-bold text-white text-2xl flex flex-row">
          <div className="w-4 bg-tedx h-1 my-auto ml-auto md:mr-2 md:ml-0"></div>
          <h1 className="text-xl mr-auto md:mr-0 md:text-4xl font-bold">TEDx — We Aspire to Inspire</h1>
        </h1>
        <h1 className="text-4xl mb-8 font-bold"></h1>
          <p className="text-md md:text-xl px-6 md:px-0">
          Since 2019, TEDxCU has provided individuals in the Ottawa-Carleton Community a platform through which they can share innovative ideas, 
          educate others, and change perspectives.”
          </p>
          <h1 className="mb-4 font-bold text-white text-2xl flex flex-row mt-20">
          <div className="w-4 bg-tedx h-1 my-auto ml-auto md:ml-0  md:mr-2"></div>
          <h1 className="text-xl mr-auto md:mr-0 md:text-4xl font-bold">Lightbulb Moments</h1>
        </h1>
          <p className="text-md md:text-xl px-6 md:px-0">
            TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
            TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
            and today covers almost all topics — from science to business to global issues — in more than 110 languages. 
            Meanwhile, independently run TEDx events help share ideas in communities around the world. 
          </p>
        </div>
      </div>
    </section>
    {/* <section className="bg-black">
      <div className="max-w-5xl mx-auto flex my-32  bg-tedx rounded-lg border-8 shadow-2xl transform skew-y-6 border-red-600">
        <div className="mr-auto max-w-lg m-8 my-24">
          <h1 className="text-4xl mb-8 font-bold ">Light Bulb Moments</h1>
          <p className="text-xl">
            Experience last years TEDX talk with this short video.
    
          </p>
        </div>
        <div className="mr-auto my-auto p-8"><img src={Vid} /></div>
      </div>
    </section>
   */}
   <section className="bg-black">
    <div className="text-center">
      <div className="text-white text-xl md:text-4xl mb-8 font-bold">TEDxCarletonUniversity Presents</div>
      <div className="max-w-md mx-auto px-6 md:px-0"><img src={LightBulb} className=""/></div>
    </div>
    <div className=" px-8 md:px-0 max-w-xs md:max-w-4xl mx-auto">
      <div className="flex mb-12 text-white text-xl max-w-md mx-auto">
        <img src={ExecFive} className="w-32 mr-auto md:h-auto rounded-lg" /> 
        <img src={ExecTwo} className="w-32  text-white text-xl ml-auto rounded-lg md:h-auto" /> 
       
      </div>
      <div className="text-white text-2xl">
        <h1 className="font-bold text-4xl text-center mb-8">President's Vision</h1>
        <h1>" Our vision is to host a conference which presents various bright ideas from within the Carleton community and inspires others to experience 
          their own lightbulb moment "</h1>
      </div>
    </div>
    <div>
      steps leading to a lightbulb moment
    </div>
   </section>
       {/* <section className="bg-black" id="stories">
        <div className="my-16 text-white max-w-6xl mx-auto">
        <h1 className="font-bold text-4xl">Stories</h1>
        </div> 
        <div className="max-w-4xl mx-auto text-white">
        <div className="flex flex-row w-full ">
          <div className="bg-tedx w-64 h-64 rounded-full mr-auto">
          </div>
          <div className="max-w-xl my-auto text-xl text-white">
            "TEDx, we will be holding our event on January 15-17, 2021,
             instead of our typical September date. The health and safety of our attendees is 
             our top priority. We will continue to monitor the situation and provide updates 
             on our website and social media channels should there be any changes to our event."
          </div>
        </div>
        <div className="flex flex-row mt-12">
        <div className="flex w-full">
          <h1 className="font-bold text-tedx text-xl ml-16 my-auto mr-4">1/7</h1> 
          <div className="my-auto bg-tedx w-full h-1"></div>
          <button className="ml-6 text-white font-bold mr-2 text-2xl mb-1"> {"<"} </button>
          <button className="ml-2 text-white font-bold text-2xl mb-1">{">"}</button>
          </div>
        <div className="ml-auto"><h1></h1> </div>
        </div>
      </div>
    </section> */}
    {/* <section className="bg-black" id="speakers">
      <div className="flex flex-col mb-20">
          <h1 className="mx-auto text-white font-bold text-xl md:text-3xl">Speakers</h1>
          <div className="h-1 w-full max-w-xs md:max-w-md bg-tedx mt-4 mx-auto"></div>
          </div>
          <div className="text-white text-md md:text-xl w-full ">
            <ul className=" list-disc mx-auto max-w-xs md:max-w-5xl">
              <li className="mt-4">Robbie Vennis (P.h.D Student) - What I learned about water in Tanzania</li>
              <li className="mt-4">Natalia Castrillion (Assistant Professor) - Architecture and Social Justice</li>
              <li className="mt-4">Charlotte Smith (P.h.D Student) - Immediate Impact and Community Building Through Research</li>
              <li className="mt-4">Zeinab Majed (Student) - Organizational Psychology in ESL Effective Teaching</li>
              <li className="mt-4">Maximillion Lee (Student) - "It's not about you"</li>
              <li className="mt-4">Julie Ivanoff (Student) - Imagining Canada's Digital Twin</li>
              <li className="mt-4">Daniel Hawes (P.h.D Student) - How Virtual Reality Gaming can Reduce Anxiety and Make you Smarter</li>
              <li className="mt-4">Assem Kroma (P.h.D Student) - Confessions of a Perfectionist: A Moment of Reflection and Repentance</li>
              <li className="mt-4">Dahlia Aradkan (Student) - Fostering Empathy in Children using Volunteering and Social Civic Services</li>
              <li className="mt-4">Nahla Abdo (Professor) - Isreali Racialization, Settler Colonialism and Palestinian Women</li>
              <li className="mt-4">Amina Mire (Associate Professor) - TBA</li>
              <li className="mt-4">Molly Zhang (Student) - Substance and Stigma</li>
            </ul>
          </div>
    </section>
    <section className="bg-black" id="scheduale">
      <div className="my-16 text-white max-w-6xl mx-auto">
      <div className="flex flex-col mb-20">
          <h1 className="mx-auto font-bold text-xl md:text-3xl">Schedule</h1>
          <div className="h-1 w-full max-w-xs md:max-w-md bg-tedx mt-4 mx-auto"></div>
          </div>
        <div className="mt-8 mb-64  text-xl text-center md:text-3xl">Coming Soon...</div>
      </div>
    </section> */}
    <section className="bg-black" id="team">
      <div className="my-16 text-white max-w-6xl mx-auto">
        <div className="mt-8 mb-64 text-3xl">
          <div className="flex flex-col mb-20">
          <h1 className="mx-auto text-white font-bold text-xl md:text-3xl">2020 - 2021 Executive Team</h1>
          <div className="h-1 w-full max-w-xs md:max-w-md bg-tedx mt-4 mx-auto"></div>
          </div>
          <div className="text-center mx-auto flex flex-col md:flex-row justify-between">
            <div>
            <img src={ExecFive} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Hijaab Yahya</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">Co-President</h1>
            </div>
           
            <div>
            <img src={ExecTwo} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Asta Stalker</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">Co-President</h1>
            </div>
            <div>
            <img src={ExecSix} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Ayaan Saigal</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">VP - Finance</h1>
            </div>
            <div>
            <img src={ExecSeven} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Savannah Logan</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">VP - Programming</h1>
            </div>
          </div>
          <div className="text-center mx-auto flex flex-col md:flex-row justify-between mt-20">
          <div>
            <img src={ExecEight} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Tiana Thomas</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">VP - Marketing</h1>
            </div>
            <div>
            <img src={ExecOne} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Anna Fullerton</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">Program Curator</h1>
            </div>
            <div>
            <img src={ExecThree} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Murshida Haider</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">Program Curator</h1>
            </div>
            <div>
            <img src={ExecFour} className="rounded w-64 mx-auto"/>
            <h1 className="font-black text-sm uppercase mt-4">Jessica Taylor</h1>
            <h1 className="font-bold text-xs mt-4 mb-8">Program Curator</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black">
      <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row my-32">
        <div className="max-w-2xl text-white">
          <h1 className="font-bold text-xl text-center md:text-left md:text-4xl mb-6" id="sponsor">Sponsor a Global Movement</h1>
          <p className="text-md md:text-xl text-justify px-6 md:px-0">
            Our sponsors help us bring quality talks to Carleton University from a variety of different people who come from unique walks of life. 
            Sponsors allow more students to have <i>Lightbulb Moments</i>.
            Stay tuned as we confirm more sponsors for the event.
          </p>
          <h1 className="mt-8 text-md md:text-xl text-justify px-6 md:px-0">Interested in sponsoring? Contact us at <a href="mailto:name@email.com" className="font-bold text-tedx">tedxcarleton@gmail.com</a></h1>
          <button className="ml-6 md:ml-0 bg-tedx hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-8">Become a Sponsor</button>
        </div>
        <div className="ml-auto w-full px-6 md:px-0 mb-8 md:mb-0 md:w-1/3">
          <img src={Team} className="rounded-lg"/>
        </div>
      </div>
    </section>
    <section className="bg-black" id="faq">
      <div className="my-16 text-white max-w-6xl mx-auto mt-32">
      <h1 className="mx-auto text-white font-bold text-xl md:text-3xl text-center">Frequently asked questions</h1>
          <div className="h-1 w-full max-w-xs md:max-w-md bg-tedx mt-4 mx-auto"></div>
        <div className="mt-8 mb-64 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2  px-6 md:pl-8 mb-4 md:mb-0">
            <h1 className="text-md md:text-xl font-bold mb-4">Is the conference going to be in-person?</h1>
            <p className="text-justify">
            The likelihood of our conference to be held in-person is entirely 
            dependent on the COVID-19 situation in Ottawa. If the circumstances 
            improve in the next few months, we will try our best to hold the 
            conference in person, in accordance with the Health and Safety guidelines
            provided by Ottawa Public Health. However, if not, we will have to 
            resort to a virtual broadcast of our event. Ultimately, our capacity 
            to hold the event in person is uncertain and we have to play it by ear.
            Any updates or changes in our capacity will be shared on this website
            and on our social media such as Facebook and Instagram. 


            </p>
            <h1 className="text-md md:text-xl font-bold mb-4 mt-8">Are we recruiting speakers for the upcoming TEDx conference?</h1>
            {/* <p className="text-justify">
            As a club, we do not want to limit students and faculty members from 
            presenting TEDx Talks, however as a Carleton University event, 
            we are inclined to accept speakers only from within the Carleton 
            community. Any member of the Carleton student body, faculties, and larger
             community, who is interested in becoming a speaker can apply through 
             a Speaker Application available on this website [insert link],
              our social media such as Instagram and Facebook, and upon request 
              of the individual. 
            </p> */}
            <p className="text-justify"> 
              We have currently closed our applications for the 2020-2021 year.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-6 md:pl-8">
          <h1 className="text-md md:text-xl font-bold mb-4">How can I volunteer at your events?</h1>
          <p className="text-justify">
            In the past students have volunteered at our annual TEDxCarletonUniversity
            event and have received a credit for their Co-Curricular Record. 
            All available volunteer positions will be shared through our mailing list
            and social media accounts such as Facebook and Instagram. Sign up to our
            mailing list and follow us on our social media to stay updated!
            For specific inquiries surrounding volunteer opportunities, please send us
            an email via the contact form of this website. 
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>

      </div>
    </section>
  </Layout>
)
}
export default IndexPage
