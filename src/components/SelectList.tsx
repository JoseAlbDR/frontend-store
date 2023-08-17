import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectProps } from "../types/interfaces";
import _ from "lodash";

export default function SortBy({ data, value, onChange, label }: ISelectProps) {
  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {data.map((item: string, index: number) => (
          <MenuItem key={index} value={item}>
            {_.capitalize(item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
