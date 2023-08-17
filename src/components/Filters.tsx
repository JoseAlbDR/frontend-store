import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

export default function Filters() {
  const navigate = useNavigate();
  const { setFeatured, setSearch, setParams, featured, company, setCompany } =
    useStore();

  const handleFeatured = () => {
    setFeatured((featured) => (featured === "true" ? "false" : "true"));
    console.log(featured);
    setSearch((search) => (!search ? true : search));
    setParams((params) => {
      const newParams = { ...params, featured };
      return newParams;
    });
  };

  const handleAll = () => {
    setSearch(false);
    setParams({});
    navigate("/");
  };

  const handleCompanyChange = (value: string) => {
    setCompany(value);

    setSearch((search) => (!search ? true : search));
    setParams((params) => {
      const newParams = { ...params, company: value };
      return newParams;
    });
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
