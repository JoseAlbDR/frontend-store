import { useQuery } from "@tanstack/react-query";
import { getProduts } from "../services/getProducts";
import _ from "lodash";
export const useProductsData = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getProduts({ limit: "0" }),
  });

  // console.log(data);

  const companies = _.uniq(data?.products.map((product) => product.company));
  const numProducts = data?.products.length;
  companies.unshift("all");
  return { isLoading, companies, numProducts, isError };
};
