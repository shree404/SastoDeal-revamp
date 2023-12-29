import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function Breadcrumb() {

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" separator=">" >
                <Link underline="hover" color="inherit" href="/" >
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="/account">
                    <Typography color="inherit" className="font-semibold">My Account </Typography>
                </Link>

                <Typography color="black" sx = {{fontWeight:400}}>Check Out</Typography>
                
            </Breadcrumbs>
        </div>
    );
}
