import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./SearchBar";

const defaultTheme = createTheme();

export default function AppLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <SearchBar />
      <Outlet />
    </ThemeProvider>
  );
}
