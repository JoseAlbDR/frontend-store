import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../hooks/useFilter";
import { useCompanies } from "../hooks/useCompanies";
import { CircularProgress, TextField } from "@mui/material";
import SelectList from "./SelectList";
import Fields from "./Fields";

export default function Filters() {
  const navigate = useNavigate();
  const { setUrlFilter } = useFilter();
  const { featured, company, sortBy, limit, reset } = useStore();

  const { companies, isLoading } = useCompanies();

  const handleFeatured = () => {
    const updatedFeatured = featured === "true" ? "false" : "true";
    setUrlFilter(updatedFeatured, "featured");
  };

  const handleCompanyChange = (value: string) => {
    setUrlFilter(value, "company");
  };

  const handleSortByChange = (value: string) => {
    setUrlFilter(value, "sortBy");
  };

  const handleLimitChange = (value: string) => {
    if (+value <= 0) return;
    setUrlFilter(value, "limit");
  };

  const handleAll = () => {
    reset();
    navigate("/");
  };

  const sortByList: string[] = [
    "Date Asc",
    "Date Desc",
    "Name Asc",
    "Name Desc",
    "Price Asc",
    "Price Desc",
    "Rating Asc",
    "Rating Desc",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <>
        <Button onClick={handleAll}>All</Button>
        <Button onClick={handleFeatured}>Featured</Button>
        <Fields />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <SelectList
            data={companies}
            value={company}
            onChange={handleCompanyChange}
            label={"Company"}
          />
        )}
        <SelectList
          data={sortByList}
          value={sortBy}
          onChange={handleSortByChange}
          label={"Sort By"}
        />
        <TextField
          id="outlined-basic"
          label="Limit"
          variant="outlined"
          type="number"
          value={limit}
          onChange={(e) => handleLimitChange(e.target.value)}
        />
      </>
    </Box>
  );
}
