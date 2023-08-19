import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import _ from "lodash";
import { useStore } from "../context/storeContext";

const allowedFields = ["name", "price", "featured", "rating", "company"];
export default function Fields() {
  const { fields, updateFields } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedFields = { ...fields, [name]: checked };
    updateFields(updatedFields); // Update fields and URL
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select Fields</FormLabel>
        <FormGroup sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {allowedFields.map((field, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={fields[field] || false}
                  onChange={handleChange}
                  name={field}
                />
              }
              label={_.capitalize(field)}
            />
          ))}
        </FormGroup>
        {/* <Button onClick={applyFilters}>Apply Filters</Button> */}
      </FormControl>
    </Box>
  );
}
