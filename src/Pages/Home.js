import React from 'react'
import FeatureSection from '../Components/FeatureSection'

const Home = () => {
  return (
    <div className='app'>
        <h1>Welcome to the shopping site </h1>
        <h3>Featured products</h3>
        <FeatureSection category ="/category/jewelery"/>
    </div>
  )
}

export default Home