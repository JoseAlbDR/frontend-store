import { createContext, useState, useContext } from "react";
import { Query, StoreContextProviderProps } from "../types/interfaces";

const StoreContext = createContext({});

interface IStoreContext {
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

function StoreProvider({ children }: StoreContextProviderProps) {
  const [params, setParams] = useState<Query>({});
  const [search, setSearch] = useState(false);
  const [featured, setFeatured] = useState("false");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  return (
    <StoreContext.Provider
      value={{
        params,
        setParams,
        search,
        setSearch,
        featured,
        setFeatured,
        name,
        setName,
        company,
        setCompany,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStore(): IStoreContext {
  const context = useContext(StoreContext);
  if (context === undefined)
    throw new Error("StoreContext was used outside of the StoreProvider");
  return context as IStoreContext;
}

export { StoreProvider, useStore };
