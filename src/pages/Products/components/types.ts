export type Filters = {
  searchTerm: string;
  category: string;
  priceGte?: number;
  priceLte?: number;
  brand: string;
  rating?: number;
  price?: string;
};

export type LeftSideBarProps = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  resetFilters: () => void;
  handleApply: () => void;
  filters: Filters;
  tempFilters: Filters;
  setTempFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

type OptionType = { value: string; label: string };

export type TFilterType = {
  key: keyof Filters;
  label: string;
  options?: OptionType[];
  type?: string;
  value: any;
};

export type FilterLayoutProps = {
  item: TFilterType;
  handleFilterChange: (key: keyof Filters, value: string | number) => void;
};
