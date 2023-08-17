import { useStore } from "../context/storeContext";

export const useFilter = () => {
  const { setSearch, setUrlParams } = useStore();
  const setUrlFilter = (
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    filterValue: string,
    filterName: string
  ) => {
    setFilter(filterValue);
    setSearch((search) => (!search ? true : search));
    setUrlParams((params) => {
      const newParams = { ...params, [filterName]: filterValue };
      return newParams;
    });
  };

  return { setUrlFilter };
};
