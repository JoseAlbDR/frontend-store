import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useStore } from "../context/storeContext";
import { useProductsData } from "../hooks/useProductsData";
import { useFilter } from "../hooks/useFilter";

export default function PaginationControlled() {
  const { page, limit } = useStore();
  const { numProducts } = useProductsData();
  const { setUrlFilter } = useFilter();

  if (!numProducts) return;

  const limitPages = Math.ceil(numProducts / limit);
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (+value <= 0 || +value === limitPages + 1) return;
    console.log(value);
    setUrlFilter(String(value), "page");
  };

  return (
    <Stack spacing={2} mb={5} zIndex={-100}>
      <Typography>Page: {page}</Typography>{" "}
      <Pagination
        count={+limitPages}
        page={+page}
        onChange={handlePageChange}
        sx={{ alignSelf: "flex-end" }}
      />
    </Stack>
  );
}
