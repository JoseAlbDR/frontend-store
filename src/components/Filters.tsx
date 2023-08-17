import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../hooks/useFilter";
import _ from "lodash";
import { useCompanies } from "../hooks/useCompanies";
import { CircularProgress } from "@mui/material";

export default function Filters() {
  const navigate = useNavigate();
  const { setUrlFilter } = useFilter();
  const {
    setFeatured,
    setSearch,
    setUrlParams,
    featured,
    company,
    setCompany,
  } = useStore();

  const { companies, isLoading } = useCompanies();

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
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <>
        <Button onClick={handleAll}>All</Button>
        <Button onClick={handleFeatured}>Featured</Button>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Company</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={company}
              label="Company"
              onChange={(e) => handleCompanyChange(e.target.value)}
            >
              {companies.map((company, index) => (
                <MenuItem key={index} value={company}>
                  {_.capitalize(company)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </>
    </Box>
  );
}
