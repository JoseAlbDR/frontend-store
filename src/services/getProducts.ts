import axios from "axios";
import { ProductResponse, Query } from "../types/interfaces";
import { STORE_API_URL as apiUrl } from "../config";
import _ from "lodash";

export const getProduts = async (
  params: Query
): Promise<ProductResponse | undefined> => {
  const query: string[] = [];

  if (params.featured) {
    query.push(`featured=${params.featured}`);
  }

  if (params.name) {
    query.push(`name=${params.name}`);
  }

  if (params.company) {
    query.push(`company=${params.company}`);
  }

  if (params.sortBy) {
    const [value, direction] = params.sortBy.toLowerCase().split(" ");
    direction === "asc"
      ? query.push(`sort=${value === "date" ? "createdAt" : value}`)
      : query.push(`sort=${value === "date" ? "-createdAt" : value}`);
  }

  if (params.fields && params.fields !== "") {
    const filterFields = params.fields.split(" ").join(",");
    query.push(`fields=${filterFields}`);
  }

  const finalQuery = `${_.isEmpty(params) ? "" : "?"}${query.join("&")}`;

  console.log(finalQuery);

  try {
    const products = await axios.get(`${apiUrl}${finalQuery}`);
    return products.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching products");
  }
};
