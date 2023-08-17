export type ICompany = "marcos" | "liddy" | "ikea" | "caressa";

export interface IProduct {
  _id: string;
  rating?: number;
  createdAt?: Date;
  name: string;
  price: number;
  company: ICompany;
  featured?: boolean;
}

export interface Query {
  featured?: string;
  name?: string;
  company?: string;
  sortBy?: string;
}

export interface StoreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IStoreContext {
  urlParams: Query;
  setUrlParams: React.Dispatch<React.SetStateAction<Query>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  featured: string;
  setFeatured: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
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
