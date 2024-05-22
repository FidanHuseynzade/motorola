import React from 'react'
import Main from '../Main'
import Number from '../Number'
import Customers from '../Customers'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="icon" href="https://static.vecteezy.com/system/resources/previews/004/606/801/original/icon-telecom-tower-long-shadow-style-simple-illustration-editable-stroke-free-vector.jpg" />
      </Helmet>
      <Main />
      <Customers />
      <Number />
    </>
  )
}

export default Home