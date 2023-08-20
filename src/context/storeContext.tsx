import { createContext, useContext, useReducer } from "react";
import {
  Action,
  IFields,
  IState,
  IStoreContext,
  Query,
  StoreContextProviderProps,
} from "../types/interfaces";

const StoreContext = createContext({});
const initialState: IState = {
  limit: 10,
  page: 1,
  urlParams: {},
  search: false,
  featured: "false",
  name: "",
  company: "",
  sortBy: "",
  fields: {
    name: true,
    price: true,
    rating: true,
    company: true,
    featured: true,
  },
  priceRange: [0, 500],
};

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case "url/updated":
      return {
        ...state,
        featured: action.payload.featured || state.featured,
        company: action.payload.company || state.company,
        sortBy: action.payload.sortBy || state.sortBy,
        urlParams: action.payload.urlParams || state.urlParams,
        search: action.payload.search,
        limit: action.payload.limit || state.limit,
        page: action.payload.page || state.page,
      };
    case "products/all":
      return initialState;
    case "name/changed":
      return {
        ...state,
        name: action.payload,
      };
    case "fields/changed":
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload, // Assuming action.payload is an object with updated fields
        },
      };
    case "priceRange/changed":
      return {
        ...state,
        priceRange: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function StoreProvider({ children }: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    featured,
    company,
    search,
    urlParams,
    sortBy,
    name,
    fields,
    limit,
    page,
    priceRange,
  } = state;

  const reset = () => {
    dispatch({ type: "products/all" });
  };

  const updateName = (value: string) => {
    dispatch({ type: "name/changed", payload: value });
  };

  const updateFields = (updatedFields: IFields) => {
    dispatch({ type: "fields/changed", payload: updatedFields });

    // Construct the fieldsParam for the URL
    const selectedFields = Object.keys(updatedFields).filter(
      (key) => updatedFields[key]
    );
    const newSearch = !search ? true : search;
    const filterName = "fields";
    const fieldsParam = selectedFields.join(" ");
    const newUrlParams: Query = { ...urlParams, [filterName]: fieldsParam };
    updateUrl(newSearch, filterName, fieldsParam, newUrlParams);
  };

  const updatePriceRange = (priceRange: number[]) => {
    dispatch({ type: "priceRange/changed", payload: priceRange });

    console.log(priceRange);
    const newSearch = !search ? true : search;
    const filterName = "numericFilter";
    const fieldsParam = `price>%3D${priceRange[0]} price<%3D${priceRange[1]}`;
    console.log(fieldsParam);
    const newUrlParams: Query = { ...urlParams, [filterName]: fieldsParam };
    updateUrl(newSearch, filterName, fieldsParam, newUrlParams);
    console.log(urlParams);
  };

  const updateUrl = (
    search: boolean,
    filter: string,
    value: string,
    urlParams: Query
  ) => {
    if (filter === "fields" && value === "") {
      delete urlParams.fields;
    }

    if (filter === "name" && value === "") {
      delete urlParams.name;
    }

    dispatch({
      type: "url/updated",
      payload: { search, [filter]: value, urlParams },
    });
  };

  return (
    <StoreContext.Provider
      value={{
        urlParams,
        search,
        featured,
        name,
        company,
        sortBy,
        fields,
        limit,
        page,
        priceRange,
        reset,
        updateUrl,
        updateName,
        updateFields,
        updatePriceRange,
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
