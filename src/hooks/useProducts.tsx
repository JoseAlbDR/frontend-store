import { useQuery } from "@tanstack/react-query";
import { getProduts } from "../services/getProducts";
import { useSearchParams } from "react-router-dom";
import { Query } from "../types/interfaces";

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const featured = searchParams.get("featured");
  const name = searchParams.get("name");
  const company = searchParams.get("company");
  const query: Query = {};

  if (featured) {
    query.featured = featured;
  }

  if (name) {
    query.name = name;
  }

  if (company) {
    query.company = company;
  }

  const { isLoading, data, isError } = useQuery({
    queryKey: ["products", featured, name, company],
    queryFn: () => getProduts(query),
  });

  return { isLoading, data, isError };
};
