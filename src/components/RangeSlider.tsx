// import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useProductsData } from "../hooks/useProductsData";
import { CircularProgress } from "@mui/material";
import { useStore } from "../context/storeContext";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  const { isLoading, maxPrice, minPrice } = useProductsData();
  const { priceRange, updatePriceRange } = useStore();

  if (isLoading) return <CircularProgress />;
  const handleChange = (_event: Event, newValue: number | number[]) => {
    updatePriceRange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Price</Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={maxPrice}
        min={minPrice}
      />
    </Box>
  );
}
