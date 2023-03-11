import { NewsObject } from "./news-object";

export interface NewsListResponse {
  category: string,
  data: NewsObject[]
}
