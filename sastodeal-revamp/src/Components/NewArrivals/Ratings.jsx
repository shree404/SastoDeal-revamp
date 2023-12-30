import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "1",
  1: "0.5",
  1.5: "3",
  2: "4",
  2.5: "5",
  3: "6",
  3.5: "7",
  4: "8",
  4.5: "9",
  5: "10",
};

export default function Ratings(props) {
  console.log("Props:", props.rating);
  const value = props.rating/2;
  // const value = 1/2;

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{props.rating}</Box>
    </Box>
  );
}
