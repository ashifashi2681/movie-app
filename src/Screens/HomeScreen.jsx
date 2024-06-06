import React from 'react'
import Layout from '../Layout/Layout'
import '../styles/HomeScreen.css'
import Banner from '../components/home/Banner'
import PopularMovies from '../components/home/PopularMovies'
import TopRated from '../components/home/TopRated'
import Promos from '../components/home/Promos'
function HomeScreen() {
  return (
    <Layout>
      <div className="home-screen-container">
        <Banner/>
        <PopularMovies/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
  )
}

export default HomeScreen