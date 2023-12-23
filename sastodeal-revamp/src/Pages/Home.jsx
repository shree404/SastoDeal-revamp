import React from 'react'

import Category from '../Components/Category';
import SmartPhoneSection from '../Components/SmartPhoneSection'
import banner1 from '../Assests/banner1.png'
import Deals_Offers from '../Components/Deals_Offers';
import Top_Category from '../Components/Top_Category';

const Home = () => {
  return (
    <div>
        <Category/>
        <img src={banner1} alt="home_banner" />
        <Deals_Offers/>
        <Top_Category/>
        <SmartPhoneSection/>
    </div>
  )
}

export default Home;