import { useQuery } from "@tanstack/react-query";
import { getProduts } from "../services/getProducts";
import _ from "lodash";
export const useCompanies = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getProduts({}),
  });

  // console.log(data);

  const companies = _.uniq(data?.products.map((product) => product.company));
  return { isLoading, companies, isError };
};
