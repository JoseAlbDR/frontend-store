import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useProducts } from "../hooks/useProducts";
import { Alert, CircularProgress } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useStore } from "../context/storeContext";
import ProductCard from "./ProductCard";

export default function Album() {
  const navigate = useNavigate();
  const { isLoading, products, isError } = useProducts();
  const { params, search } = useStore();

  useEffect(() => {
    if (search) {
      console.log(params);
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(params as URLSearchParams)}`,
      });
    }
  }, [params, navigate, search]);

  console.log(isLoading);
  if (isLoading) return <CircularProgress />;

  if (!products || isError)
    return <Alert severity="error">Error Fetching Products</Alert>;

  return (
    <>
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
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
