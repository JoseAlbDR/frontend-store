import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Container } from "@mui/material";
import Header from "./Header";
import Box from "@mui/material/Box";
import Filters from "./Filters";

const defaultTheme = createTheme();

export default function AppLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <SearchBar />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Header />
            <Filters />
          </Container>
        </Box>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
