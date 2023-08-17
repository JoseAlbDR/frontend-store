import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Container, styled } from "@mui/material";
// import Header from "./Header";
import Box from "@mui/material/Box";
import Filters from "./Filters";

const Header = styled("div")(() => ({
  position: "sticky",
  top: 0,
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
}));

const defaultTheme = createTheme();

export default function AppLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header>
        <SearchBar />
        <Box sx={{ bgcolor: "background.paper", pt: 2, pb: 2 }}>
          <Container maxWidth="sm">
            <Filters />
          </Container>
        </Box>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
