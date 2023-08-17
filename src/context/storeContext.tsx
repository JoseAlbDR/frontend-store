import { createContext, useContext, useState } from "react";
import {
  IStoreContext,
  Query,
  StoreContextProviderProps,
} from "../types/interfaces";

const StoreContext = createContext({});
// const initialState: IState = {
//   urlParams: {},
//   search: false,
//   featured: "false",
//   name: "",
//   company: "ikea",
//   sortBy: "",
// };

// function reducer(state: IState, action: { type: string; payload: any }) {
//   console.log(action.type);
//   switch (action.type) {
//     case "clearFilters":
//       return initialState;
//     case "reset":
//       return initialState;
//     case "urlParams/changed":
//       return {
//         ...state,
//         urlParams: action.payload,
//       };
//     case "search/togle":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "featured/changed":
//       return {
//         ...state,
//         featured: action.payload,
//       };
//     case "name/changed":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case "company/changed":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case "sortBy/changed":
//       return {
//         ...state,
//         sortBy: action.payload,
//       };
//     default:
//       throw new Error("Unknown action type");
//   }
// }

function StoreProvider({ children }: StoreContextProviderProps) {
  const [urlParams, setUrlParams] = useState<Query>({});
  const [search, setSearch] = useState(false);
  const [featured, setFeatured] = useState("false");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [sortBy, setSortBy] = useState("");
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const noFilters = () => {
  //   dispatch({ type: "clearFilters", payload: "" });
  // };

  const reset = () => {
    setName("");
    setCompany("");
    setSortBy("");
  };

  // const setUrlParams = (value: Query) => {
  //   dispatch({ type: "urlParams/changed", payload: value });
  // };

  // const setSearch = (value: boolean) => {
  //   dispatch({ type: "search/togle", payload: value });
  // };

  // const setFeatured = (value: string) => {
  //   console.log(value);
  //   dispatch({ type: "featured/changed", payload: value });
  // };

  // const setName = (value: string) => {
  //   dispatch({ type: "name", payload: value });
  // };

  // const setCompany = (value: string) => {
  //   dispatch({ type: "company", payload: value });
  // };

  // const setSortBy = (value: string) => {
  //   dispatch({ type: "sortBy", payload: value });
  // };

  // const { urlParams, search, featured, name, company, sortBy } = state;

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
        sortBy,
        setSortBy,
        reset,
        // noFilters,
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
