// import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useProductsData } from "../hooks/useProductsData";
import { CircularProgress } from "@mui/material";
import { useStore } from "../context/storeContext";
import SelectList from "./SelectList";
import { useState } from "react";
import _ from "lodash";
import { IRangeSliderProps } from "../types/interfaces";
export default function RangeSlider({ type }: IRangeSliderProps) {
  const [sign, setSign] = useState("=");

  const signs = ["=", ">", ">=", "<", "<="];
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  const { isLoading, maxPrice, minPrice } = useProductsData();
  const { updateNumericFilter } = useStore();

  if (isLoading) return <CircularProgress />;
  const handleChange = (_event: Event, newValue: number | number[]) => {
    const priceString = `${type}${sign}${newValue}`;
    updateNumericFilter(priceString);
  };

  const handleSignChange = (event: string) => {
    console.log(event);
    setSign(event);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50%",
        gap: "10px",
      }}
    >
      <Typography gutterBottom>{_.capitalize(type)}</Typography>
      <SelectList
        data={signs}
        value={sign}
        onChange={handleSignChange}
        label={"Operator"}
      />
      <Slider
        defaultValue={minPrice}
        aria-label="Default"
        max={maxPrice}
        min={minPrice}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
