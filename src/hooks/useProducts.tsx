import { useQuery } from "@tanstack/react-query";
import { getProduts } from "../services/getProducts";
import { useSearchParams } from "react-router-dom";
import { Query } from "../types/interfaces";

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const featured = searchParams.get("featured");
  const name = searchParams.get("name");
  const company = searchParams.get("company");
  const sortBy = searchParams.get("sortBy");
  const fields = searchParams.get("fields");
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const numericFilter = searchParams.get("numericFilters");
  const query: Query = {};

  const allowedParams = [
    "name",
    "company",
    "sortBy",
    "fields",
    "featured",
    "limit",
    "page",
    "numericFilters",
  ];

  if (featured) {
    query.featured = featured;
  }

  if (name) {
    query.name = name;
  }

  if (company) {
    query.company = company;
  }

  if (sortBy) {
    query.sortBy = sortBy;
  }

  if (fields) {
    query.fields = fields;
  }

  if (limit) {
    query.limit = limit;
  }

  if (page) {
    query.page = page;
  }

  if (numericFilter) {
    query.numericFilter = numericFilter;
  }
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [
      "products",
      featured,
      name,
      company,
      sortBy,
      fields,
      limit,
      page,
      numericFilter,
    ],
    queryFn: () => {
      const params = Object.fromEntries(searchParams.entries());
      const keys = Object.keys(params);
      keys.forEach((key) => {
        // Check for correct params
        if (!allowedParams.includes(key)) {
          throw new Error(`Param ${key} is not allowed`);
        }
      });
      return getProduts(query);
    },
  });

  return { isLoading, data, isError, error };
};
