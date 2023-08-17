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
}

export interface StoreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface IStoreContext {
  params: Query;
  setParams: React.Dispatch<React.SetStateAction<Query>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  featured: string;
  setFeatured: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProductProps {
  product: IProduct;
}
