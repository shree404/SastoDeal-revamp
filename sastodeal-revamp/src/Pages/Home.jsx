import React from 'react'

import Category from '../Components/Category';
import SmartPhoneSection from '../Components/SmartPhoneSection'
import Deals_Offers from '../Components/Deals_Offers';
import Top_Category from '../Components/Top_Category';
import DailyEssentials from '../Components/DailyEssentials';
import ElectronicsBrand from '../Components/ElectronicsBrand';

import banner1 from '../Assests/banner1.png'
import Letterfeed_signup from '../Components/Letterfeed_signup';
import Reviews from '../Components/Reviews';
const Home = () => {
  return (
    <div>
        <Category/>
        <img src={banner1} alt="home_banner" className=' cursor-pointer' />
        <Deals_Offers/>
        <Top_Category/>
        <SmartPhoneSection/>
        <Reviews/>
        <DailyEssentials/>
        <ElectronicsBrand/>
        <Letterfeed_signup/>
    </div>
  )
}

export default Home;