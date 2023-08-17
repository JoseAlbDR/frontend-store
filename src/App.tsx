import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Album from "./components/Album";
import AppLayout from "./components/AppLayout";
import { StoreProvider } from "./context/storeContext";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Album />} />
              <Route path="search" element={<Album />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
