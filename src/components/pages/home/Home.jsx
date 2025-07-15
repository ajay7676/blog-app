import React from 'react'
import MainSection from './MainSection'
import SecondSection from './SecondSection'
import BlogSection from './BlogSection'

const Home = () => {
  return (
    <div className='w-full '>
      <MainSection />
      <SecondSection />
      <BlogSection />
    </div>
  )
}

export default Home