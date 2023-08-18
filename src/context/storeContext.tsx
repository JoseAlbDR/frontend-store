import { createContext, useContext, useReducer } from "react";
import {
  Action,
  IState,
  IStoreContext,
  Query,
  StoreContextProviderProps,
} from "../types/interfaces";

const StoreContext = createContext({});
const initialState: IState = {
  urlParams: {},
  search: false,
  featured: "false",
  name: "",
  company: "",
  sortBy: "",
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
      };
    case "products/all":
      return initialState;
    case "name/changed":
      return {
        ...state,
        name: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function StoreProvider({ children }: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { featured, company, search, urlParams, sortBy, name } = state;

  const reset = () => {
    dispatch({ type: "products/all" });
  };

  const updateName = (value: string) => {
    dispatch({ type: "name/changed", payload: value });
  };

  const updateUrl = (
    search: boolean,
    filter: string,
    value: string,
    urlParams: Query
  ) => {
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
        reset,
        updateUrl,
        updateName,
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
