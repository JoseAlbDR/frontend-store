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
