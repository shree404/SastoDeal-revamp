import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Typography, Box } from '@mui/material';

import Dropdown from './Dropdown';



export default function CheckboxList(props) {

    const [dropdownlogic, setdropdownlogic] = React.useState(false)
    const handledropdown = () => {
        setdropdownlogic(!dropdownlogic);
    }

    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);


    };

    return (
        <Box sx={{ width: "300px" }}>

            <Box onClick={handledropdown}>
                <Dropdown header={props.title} />
            </Box>

            <List sx={{ bgcolor: 'background.paper' }} className={`${dropdownlogic ? "" : "hidden"}`}>
                {
                    props.details.map((value) => {
                        const labelId = `checkbox-list-label-${value.name}`;
                        return (
                            <ListItem
                                key={value}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <Typography sx={{ color: "#000", fontWeight: "400" }}>{value.num}</Typography>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="end"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            color="warning"
                                            style={{
                                                color: "#FF9C72",
                                            }}
                                        />
                                    </ListItemIcon>

                                    <Typography sx={{ color: "#000", fontWeight: "400" }}>{value.name}</Typography>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
            </List>

            <hr className='h-1 w-80% text-[#E4E4E4] mt-2 mb-2' />
        </Box >
    );
}