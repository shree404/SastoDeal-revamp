import React from 'react';
import PersonalInfoSection from '../Components/Personal Info/section';
import Myinfo from '../Components/Personal Info/Myinfo';
import PersonalInfoHeader from '../Components/Personal Info/PersonalinfoHeader';

function PersonalInfo(){
    return(
        <div>
            <PersonalInfoHeader/>
            <div className='flex gap-10'>
            <PersonalInfoSection/>
            <Myinfo/>
            </div>
        </div>
    )
}

export default PersonalInfo ;