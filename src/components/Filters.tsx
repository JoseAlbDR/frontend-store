import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../hooks/useFilter";

export default function Filters() {
  const navigate = useNavigate();
  const setUrlFilter = useFilter();
  const {
    setFeatured,
    setSearch,
    setUrlParams,
    featured,
    company,
    setCompany,
  } = useStore();

  const handleFeatured = () => {
    const updatedFeatured = featured === "true" ? "false" : "true";
    setUrlFilter(setFeatured, updatedFeatured, "featured");
  };

  const handleCompanyChange = (value: string) => {
    setUrlFilter(setCompany, value, "company");
  };

  const handleAll = () => {
    setSearch(false);
    setUrlParams({});
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Button onClick={handleAll}>All</Button>
      <Button onClick={handleFeatured}>Featured</Button>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id="demo-simple-select-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company}
          label="Company"
          onChange={(e) => handleCompanyChange(e.target.value)}
        >
          <MenuItem value={"ikea"}>Ikea</MenuItem>
          <MenuItem value={"marcos"}>Marcos</MenuItem>
          <MenuItem value={"liddy"}>Liddy</MenuItem>
          <MenuItem value={"caressa"}>Caressa</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
