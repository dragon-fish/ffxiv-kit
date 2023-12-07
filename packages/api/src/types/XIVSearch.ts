import { XIVContentIndex, XIVContentIndexItem } from './XIVContent'
import { XIVPagination } from './XIVPagination'

export interface XIVSearchResult extends XIVContentIndexItem {
  UrlType: XIVContentIndex
  _: Lowercase<XIVContentIndex>
  _Score: string
}

export interface XIVSearchParams {
  indexes: XIVContentIndex[]
  filters: string[]
  string_column: string
  page: number
  limit: number
}

export interface XIVSearchResponse {
  Pagination: XIVPagination
  Results: XIVSearchResult[]
}
