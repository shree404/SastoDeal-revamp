import React, { useState } from "react";
import { Box } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Dropdown from "./Dropdown";

const Price = ({ onChange }) => {
  const [dropdownLogic, setDropdownLogic] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdown = () => {
    setDropdownLogic(!dropdownLogic);
  };

  const handlePriceChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    // Modify the onChange call to send the formatted price range
    const [minPrice, maxPrice] = newValue.split("-");
    onChange(`price[gte]=${minPrice}&price[lte]=${maxPrice}`);
  };

  return (
    <div>
      <Box onClick={handleDropdown}>
        <Dropdown header="Price" />
      </Box>

      <Box className={`${dropdownLogic ? "" : "hidden"} m-5`}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedValue}
            name="radio-buttons-group"
            onChange={handlePriceChange}
          >
            <FormControlLabel
              value="100-499"
              control={<Radio style={{ color: "#FF9C72" }} />}
              label="Rs 100 - 499"
            />
            <FormControlLabel
              value="500-999"
              control={<Radio style={{ color: "#FF9C72" }} />}
              label="Rs 500 - 999"
            />
            <FormControlLabel
              value="1000-1499"
              control={<Radio style={{ color: "#FF9C72" }} />}
              label="Rs 1000 - 1499"
            />
            <FormControlLabel
              value="1500"
              control={<Radio style={{ color: "#FF9C72" }} />}
              label="1500 and Up"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <hr className="h-1 w-80% text-[#E4E4E4] mt-2 mb-2" />
    </div>
  );
};

export default Price;
