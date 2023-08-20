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
import { useFilter } from "../hooks/useFilter";
export default function NumericFilters({ type }: IRangeSliderProps) {
  const [sign, setSign] = useState(">=");
  const { setUrlFilter } = useFilter();
  const { updateNumericFilter, numericFilter } = useStore();
  const { isLoading, maxPrice, maxRating, minPrice, minRating } =
    useProductsData();

  const signs = ["=", ">", ">=", "<", "<="];
  // const [value, setValue] = React.useState<number[]>([20, 37]);

  if (isLoading) return <CircularProgress />;
  const handleChange = (_event: Event, newValue: number | number[]) => {
    const value = `${sign}${newValue}`;
    const updatedNumericFilters = { ...numericFilter, [type]: value };
    const selectedNumericFilters = Object.entries(updatedNumericFilters)
      .map(([key, value]) => {
        if (value !== "") return `${key}${value}`;
      })
      .filter((value) => value !== undefined);
    const fieldsParam = selectedNumericFilters.join(" ");
    setUrlFilter(fieldsParam, "numericFilters");
    updateNumericFilter(updatedNumericFilters);
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
        width: "40%",
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
        defaultValue={type === "price" ? minPrice : minRating}
        aria-label="Default"
        max={type === "price" ? maxPrice : maxRating}
        min={type === "price" ? minPrice : minRating}
        step={type === "price" ? 1 : 0.1}
        onChange={handleChange}
        valueLabelDisplay="on"
        sx={{ marginLeft: 1 }}
      />
    </Box>
  );
}
