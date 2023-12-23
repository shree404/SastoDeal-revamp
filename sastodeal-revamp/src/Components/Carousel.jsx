import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'

import carousel_watch from '../Assests/carousel_watch.png'

function Carousel_main()
{
    var items = [
        {
            name: "Best Deal Online on smart watches",
            description1: "SMART WEARABLE.",
            description2:"UP to 80% OFF",
            image:carousel_watch
        },
        {
            name: "Best Deal Online on smart something",
            description1: "SMART SOMETHING.",
            description2:"UP to 90% OFF",
            image:carousel_watch
        }
    ]

    return (
        <Carousel sx={{width:"98%", ml:2}}  >
            {
                // items.map( (item, i) => <Item key={i} item={item} /> )
                items.map((item,i)=>{
                    return <Item key = {i} item = {item}/>
                })
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{backgroundColor:"#212844", display:"flex", justifyContent:"space-around",p:5}}>
            <div className='text-white'>
                <h1 className=' text-3xl  w-2/3'>{props.item.name}</h1>
                <h1 className=' text-7xl font-bold mb-6 '>{props.item.description1}</h1>
                <h1 className=' text-3xl'>{props.item.description2}</h1>
            </div>

            <div>
                <img src={props.item.image} alt="" />
            </div>

        </Paper>
    )
}


export default Carousel_main;

