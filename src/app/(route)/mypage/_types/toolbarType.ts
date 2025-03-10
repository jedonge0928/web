export interface ListConfig {
  page: number;
  size: number;
  orderType: "CREATE" | "RECOMMEND" | "COMMENT" | "ANSWERED";
  searchType: "TITLE" | "CONTENT" | "TITLE_CONTENT" | "COMMENT";
  search: string;
}

export interface PageInfo {
  currentPage: number;
  totalPage: number;
  totalElement: number;
}

export interface DropdownOption {
  label: string;
  value: string;
}
