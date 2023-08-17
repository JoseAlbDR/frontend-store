import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material";
import { useStore } from "../context/storeContext";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#fff",
  },
}));

export default function SearchBar() {
  const { setSearch, setParams, setName, name } = useStore();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch((search) => (!search ? true : search));
    setParams((params) => {
      const newParams = { ...params, name };
      return newParams;
    });
    setName("");
  };

  return (
    <AppBar
      position="relative"
      sx={{ position: "sticky", top: "0", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <LocalGroceryStoreIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Store Api Demo
        </Typography>
        <Search onSubmit={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
