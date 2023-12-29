import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductReviews from './ProductReviews';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%',mt:5 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                 value={value} onChange={handleChange} 
                 aria-label="basic tabs example"
                 
                 >
                    <Tab label="Product Details" {...a11yProps(0)} className="w-[50%]" />
                    <Tab label="Reviews and Ratings" {...a11yProps(1)}  className = "w-[50%]"/>
                    <Tab label="FAQs" {...a11yProps(2)} className = "w-[50%]"/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ProductReviews />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            </CustomTabPanel>
        </Box>
    );
}
