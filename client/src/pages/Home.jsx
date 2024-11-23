import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Textimonials from '../components/Textimonials'
import GenerateButton from '../components/GenerateButton'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Textimonials/>
      <GenerateButton/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home