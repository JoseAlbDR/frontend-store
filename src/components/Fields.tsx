import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import _ from "lodash";
const handleChange = () => {};
const allowedFields = ["name", "price", "featured", "rating", "company"];
export default function Fields() {
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select Fields</FormLabel>
        <FormGroup sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {allowedFields.map((field) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  onChange={handleChange}
                  name={field}
                />
              }
              label={_.capitalize(field)}
            />
          ))}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Box>
  );
}
