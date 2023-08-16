import axios from "axios";
import { IProduct, Query } from "../types/interfaces";
import _ from "lodash";

export const getProduts = async (
  params: Query
): Promise<IProduct[] | undefined> => {
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

  const finalQuery = `${_.isEmpty(params) ? "" : "?"}${query.join("&")}`;

  console.log(finalQuery);

  try {
    const products = await axios.get(
      `http://127.0.0.1:3000/api/v1/products${finalQuery}`
    );

    if (!products) throw new Error("Error getting products");

    return products.data.products;
  } catch (error) {
    console.log(error);
  }
};
