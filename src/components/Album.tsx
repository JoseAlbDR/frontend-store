// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useProducts } from "../hooks/useProducts";
import { Alert, alpha, CircularProgress, styled } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Query } from "../types/interfaces";
// import { ICompany, Query } from '../types/interfaces';

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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const [params, setParams] = useState<Query>({});
  const [search, setSearch] = useState(false);
  const { isLoading, products, isError } = useProducts();
  const [featured, setFeatured] = useState("false");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (search) {
      console.log(params);
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(params as URLSearchParams)}`,
      });
    }
    // setSearch((search) => (!search ? true : false));
  }, [params, navigate, search]);

  if (isLoading) return <CircularProgress />;
  console.log();

  if (!products || isError)
    return <Alert severity="error">Error Fetching Products</Alert>;

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

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch((search) => (!search ? true : false));
    setParams((params) => {
      const newParams = { ...params, name };
      return newParams;
    });
    setName("");
  };

  const handleCompanyChange = (e: { target: { value: string } }) => {
    setCompany(e.target.value);
    console.log(e.target.value);
    console.log(company);
    setSearch((search) => (!search ? true : false));
    setParams((params) => {
      const newParams = { ...params, company };
      return newParams;
    });
  };
  // console.log(products);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Store
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
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Store Api Demo
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Front End for Store Api
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
            <Button onClick={handleAll}>All</Button>
            <Button onClick={handleFeatured}>Featured</Button>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="Company"
                onChange={handleCompanyChange}
              >
                <MenuItem value={"ikea"}>Ikea</MenuItem>
                <MenuItem value={"marcos"}>Marcos</MenuItem>
                <MenuItem value={"liddy"}>Liddy</MenuItem>
                <MenuItem value={"caressa"}>Caressa</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {isLoading && <CircularProgress />}
            {!products.length && (
              <Alert severity="info" sx={{ width: "100%" }}>
                No products meets the filters.
              </Alert>
            )}
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={`https://source.unsplash.com/random?${product.name
                      .split(" ")
                      .at(-1)}`}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      gap: "15px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                      Company: {product.company}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Price: {product.price}</Typography>
                      <Typography>Rating: {product.rating}</Typography>
                    </Box>
                    <Typography>
                      Featured: {product.featured ? "Yes" : "No"}
                    </Typography>
                    <Typography>ID: {product._id}</Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
