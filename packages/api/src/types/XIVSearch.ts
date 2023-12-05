import { XIVContentIndex } from './XIVContent'
import { XIVPagination } from './XIVPagination'

export interface XIVSearchResult {
  ID: number
  Icon: string
  Name: string
  Url: string
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
