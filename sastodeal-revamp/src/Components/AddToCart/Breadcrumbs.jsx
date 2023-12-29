import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function Breadcrumb() {

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator= ">" >
        <Link underline="hover" color="inherit" href="/" >
          Home
        </Link>
        <Typography color="black" className= "font-semibold"> Add To Cart </Typography>
      </Breadcrumbs>
    </div>
  );
}
