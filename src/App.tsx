import { BrowserRouter, Routes } from "react-router-dom";
// import Album from "./components/Album";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
