import React, { useState, setDisabled, setMessage } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


import '../styles/tailwind.css'

const ContactPage = () => {

  return (
  <Layout>
    <section className="bg-black h-screen w-full">
        <div className="border-2 border-white mt-32 max-w-3xl mx-auto mb-16">
            <h1 className="mt-8 mb-4 ml-8 text-xl font-bold text-white">Name</h1>
            <input className="shadow appearance-none border ml-8 max-w-2xl 
                            w-full rounded  py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" 
                    id="username" type="text" placeholder="Name"/>
            <h1 className="mt-8 mb-4 ml-8 text-xl font-bold text-white">Email</h1>
            <input className="shadow appearance-none border max-w-2xl  ml-8 
                            w-full rounded  py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" 
                    id="username" type="text" placeholder="Email"/>
            <h1 className="mt-8 mb-4 ml-8 text-xl font-bold text-white">Message</h1>
            <input className="shadow appearance-none border max-w-2xl  ml-8 
                            w-full rounded  py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline mb-12 py-32" 
                    id="username" type="text" placeholder=""/>
            <br/>
            <button className="w-full max-w-2xl ml-8 mb-8 bg-tedx py-4 rounded-lg text-white font-bold text-xl">Sumbit</button>
        </div>  
    </section>
  </Layout>
)
}
export default ContactPage
