import React from 'react';
import {Box} from "@mui/material"

const Items = (props)=>{
    return (
        <div>
            <Box>
                <Box>
                    <img src ={props.detail.image}/>
                    <h1>{props.detail.name}</h1>
                    <p>Color:{props.detail.color}</p>
                    <p>Price : {props.detail.price}</p>
                </Box>
            </Box>
        </div>
    )
}

export default Items;