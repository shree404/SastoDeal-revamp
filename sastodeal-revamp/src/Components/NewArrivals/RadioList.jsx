import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Typography, Box } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Dropdown from "./Dropdown";

export default function RadioList(props) {
  const [dropdownlogic, setdropdownlogic] = React.useState(false);
  const handledropdown = () => {
    setdropdownlogic(!dropdownlogic);
  };

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

  var details = ["Samsung", "a", "b", "c", "d"];
  
  return (
    <Box sx={{ width: "300px" }}>
      <Box onClick={handledropdown}>
        <Dropdown header={props.title} />
      </Box>

      <List
        sx={{ bgcolor: "background.paper" }}
        className={`${dropdownlogic ? "" : "hidden"}`}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            
          >
          {props.details.map((value) => {
  const labelId = `checkbox-list-label-${value.name}`;
  return (
    <FormControlLabel
      key={value.name}  // Add a unique key for each FormControlLabel
      value={value.name} // Use value.name as the value
      control={<Radio style={{
        color: "#FF9C72",
    }} />}
      label={value.name} // Use value.name as the label
    />
  );
})}

          </RadioGroup>
        </FormControl>
      </List>

      <hr className="h-1 w-80% text-[#E4E4E4] mt-2 mb-2" />
    </Box>
  );
}
