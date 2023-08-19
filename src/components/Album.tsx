import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useProducts } from "../hooks/useProducts";
import { Alert, CircularProgress, Typography } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useStore } from "../context/storeContext";
import ProductCard from "./ProductCard";

export default function Album() {
  const navigate = useNavigate();
  const { isLoading, data, isError, error } = useProducts();
  const { urlParams, search } = useStore();

  useEffect(() => {
    if (search) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(urlParams as URLSearchParams)}`,
      });
    }
  }, [urlParams, navigate, search]);

  return (
    <>
      <Container sx={{ py: 8, textAlign: "center" }} maxWidth="md">
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <Alert severity="error">{`${error}`}</Alert>
        ) : !data?.products ? (
          <Alert severity="error">No Products Found</Alert>
        ) : (
          <>
            <Typography sx={{ mb: 3 }}>Results: {data.nbHits}</Typography>
            <Grid container spacing={4}>
              {isLoading && <CircularProgress />}
              {!data.products.length && (
                <Alert
                  severity="info"
                  sx={{ width: "100%", marginTop: "15px" }}
                >
                  {`No products meets the filters: ${Object.entries(urlParams)
                    .map((entry) => entry.join("="))
                    .join(", ")}`}
                </Alert>
              )}
              {data.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
