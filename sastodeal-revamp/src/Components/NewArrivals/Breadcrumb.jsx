import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function Breadcrumb(props) {

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator= {props.separator} >
        <Link underline="hover" color={props.color} href="/" >
          Home
        </Link>
        <Typography color={props.color} >New Arrivals </Typography>
        <Typography color = {props.color}></Typography>
      </Breadcrumbs>
    </div>
  );
}
