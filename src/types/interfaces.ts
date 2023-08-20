export type ICompany = "marcos" | "liddy" | "ikea" | "caressa" | "" | "all";

export interface IProduct {
  _id: string;
  rating?: number;
  createdAt?: Date;
  name: string;
  price: number;
  company: ICompany;
  featured?: boolean;
}

export interface IState {
  urlParams: Query;
  name: string;
  featured: string;
  company: ICompany;
  sortBy: string;
  search: boolean;
  fields: IFields;
  limit: number;
  page: number;
  numericFilter: string;
}

export type IFields = {
  [x: string]: boolean;
};

export interface Query {
  featured?: string;
  name?: string;
  company?: string;
  sortBy?: string;
  fields?: string;
  limit?: string;
  page?: string;
  numericFilter?: string;
}

export interface StoreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IStoreContext {
  urlParams: Query;
  search: boolean;
  featured: string;
  name: string;
  company: string;
  sortBy: string;
  limit: number;
  page: number;
  fields: IFields;
  numericFilter: string;
  reset: () => void;
  updateUrl: (
    search: boolean,
    filter: string,
    value: string,
    urlParams: Query
  ) => void;
  updateName: (value: string) => void;
  updateFields: (fields: IFields) => void;
  updateNumericFilter: (value: string) => void;
}

export interface IRangeSliderProps {
  type: string;
}

export interface IProductProps {
  product: IProduct;
}

export interface ISelectProps {
  data: ICompany[] | string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export interface ProductResponse {
  nbHits: number;
  products: IProduct[];
}

type UpdateUrlPayload = {
  search: boolean;
  company?: ICompany;
  featured?: string;
  sortBy?: string;
  urlParams: Query;
  fields?: string[];
  limit?: number;
  page?: number;
};

type NameChangedPayload = string;

export type Action =
  | { type: "url/updated"; payload: UpdateUrlPayload }
  | { type: "products/all" }
  | { type: "name/changed"; payload: NameChangedPayload }
  | { type: "fields/changed"; payload: IFields }
  | { type: "numericFilter/changed"; payload: string };
