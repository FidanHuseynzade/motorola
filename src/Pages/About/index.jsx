import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss'
import Map from '../Map/index ';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About</title>
        <link rel="icon" href="https://static.vecteezy.com/system/resources/previews/004/606/801/original/icon-telecom-tower-long-shadow-style-simple-illustration-editable-stroke-free-vector.jpg" />
      </Helmet>
      <img src="https://www.leti-cea.com/cea-tech/leti/PublishingImages/Recherche%20appliqu%C3%A9e/Plateformes/telecom/banner.jpg" alt="" />
      <div className="aboutt">
        <p>"Telecom Invest" LLC is one of the leading operators successfully operating in the field of telecommunications and information technologies in Azerbaijan since 2007. Currently, "Telekom Invest" has two large business networks: Wireless communication services and Internet service services and Radio telecommunications</p>
        <p>Telecom Invest is the largest wireless communication and IT company in Azerbaijan. He has implemented many projects that have been successfully completed in 11 years. The main goal of the company is to create a perfect system and control all projects, from management software to operations and the entire system. At the same time, Telekom Invest ISP has created a payment system for business.</p>
      </div>
      <Map />
    </div>
  )
}

export default About