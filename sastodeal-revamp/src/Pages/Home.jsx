import {React,useState,useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';

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
  let [Loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false);
  }
    , [])
  return (
    <div>
      <Category />
      <div>
        {
          Loading ? (
            <Skeleton variant="rectangular" width="100%" height={400} />
          ) : (
            <img src={banner1} alt="home_banner" className=' cursor-pointer' />

          )
        }
      </div>
      <Deals_Offers />
      <Top_Category />
      <SmartPhoneSection />
      <Reviews />
      <DailyEssentials />
      <ElectronicsBrand />
      <Letterfeed_signup />
    </div>
  )
}

export default Home;