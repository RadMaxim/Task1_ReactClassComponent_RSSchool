import { ElementType } from "../BottomSection";

export interface typeData {
  search: string | null;
  page: number;
}
export interface ForPagination {
  search: string | null;
}
export interface ElementsResponse {
  count: number;
  next: string;
  previous: string;
  results: ElementType[];
}
