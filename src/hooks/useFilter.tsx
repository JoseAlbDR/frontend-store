import { useStore } from "../context/storeContext";
import { Query } from "../types/interfaces";

export const useFilter = () => {
  const { updateUrl, search, urlParams } = useStore();
  const setUrlFilter = (filterValue: string, filterName: string) => {
    const newSearch = !search ? true : search;
    const newUrlParams: Query = { ...urlParams, [filterName]: filterValue };
    updateUrl(newSearch, filterName, filterValue, newUrlParams);
  };

  return { setUrlFilter };
};
