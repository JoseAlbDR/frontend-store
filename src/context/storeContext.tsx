import { createContext, useState, useContext } from "react";
import {
  IStoreContext,
  Query,
  StoreContextProviderProps,
} from "../types/interfaces";

const StoreContext = createContext({});

function StoreProvider({ children }: StoreContextProviderProps) {
  const [urlParams, setUrlParams] = useState<Query>({});
  const [search, setSearch] = useState(false);
  const [featured, setFeatured] = useState("false");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  return (
    <StoreContext.Provider
      value={{
        urlParams,
        setUrlParams,
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
