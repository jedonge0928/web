export interface noticeListConfig {
  page: number;
  size: number;
  orderType: "" | "CREATE" | "RECOMMEND" | "COMMENT";
  searchType: "" | "TITLE" | "CONTENT" | "TITLE_CONTENT" | "NICKNAME" | "COMMENT";
  search: string;
}