import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';


export default function CheckboxList(props) {
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
        <List sx={{ width: '80%', maxWidth: 300, bgcolor: 'background.paper' }}>
            {
                props.details.map((value) => {
                    const labelId = `checkbox-list-label-${value.name}`;

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <Typography sx={{color:"#000",fontWeight:"400"}}>{value.num}</Typography>
                                </IconButton>
                            }
                            disablePadding
                                                        
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        color="warning"
                                    />
                                </ListItemIcon>
                                
                                <Typography sx={{color:"#000",fontWeight:"400"}}>{value.name}</Typography>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
        </List>
    );
}