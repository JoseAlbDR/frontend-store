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
import { useFilter } from "../hooks/useFilter";

const allowedFields = ["name", "price", "featured", "rating", "company"];
export default function Fields() {
  const { fields, updateFields } = useStore();
  const { setUrlFilter } = useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedFields = { ...fields, [name]: checked };

    const selectedFields = Object.keys(updatedFields).filter(
      (key) => updatedFields[key]
    );
    const fieldsParam = selectedFields.join(" ");
    setUrlFilter(fieldsParam, "fields");
    updateFields(updatedFields);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          Select Fields (all selected by default)
        </FormLabel>
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
