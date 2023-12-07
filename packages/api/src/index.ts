import { Fexios, FexiosConfigs } from 'fexios'
import {
  XIV_CONTENT_INDEXES,
  XIVContentIndexStandard,
  type XIVContentIndex,
  XIVContentIndexItem,
} from './types/XIVContent'
import { XIVSearchParams, XIVSearchResponse } from './types/XIVSearch'
import { XIVActionData } from './types/XIVAction'
import { XIVItemData } from './types/XIVItem'
import { XIVClassJobData } from './types/XIVClassJob'
import { XIVPagination } from './types/XIVPagination'

export class XIVApi {
  readonly XIV_CONTENT_INDEXES = [...XIV_CONTENT_INDEXES]

  constructor(
    readonly baseURL: string = 'https://cafemaker.wakingsands.com/',
    public options?: Partial<FexiosConfigs>
  ) {}

  get api() {
    return new Fexios({
      ...this.options,
      baseURL: this.baseURL,
    })
  }

  async search(
    string: string,
    {
      indexes = [],
      filters = [],
      page = 1,
      limit = 100,
    }: Partial<XIVSearchParams>
  ): Promise<XIVSearchResponse> {
    const query = new URLSearchParams()
    query.append('string', string)
    query.append('indexes', indexes.join(','))
    query.append('filters', filters.join(','))
    query.append('page', page.toString())
    query.append('limit', limit.toString())

    return this.api
      .get<XIVSearchResponse>('search', {
        query,
      })
      .then(({ data }) => {
        return data
      })
  }

  standardizeContentIndex(index: string) {
    const matched = this.XIV_CONTENT_INDEXES.find(
      (i) => i.toLowerCase() === index.toLowerCase()
    )
    return matched || null
  }
  isValidContentIndex(index: string) {
    return this.standardizeContentIndex(index) !== null
  }

  readonly contents = {
    indexes: async (): Promise<XIVContentIndexStandard[]> => {
      return this.api
        .get<XIVContentIndex[]>('content')
        .then(({ data }) => data as any)
    },
    list: async (
      index: XIVContentIndex,
      page = 1,
      limit = 100
    ): Promise<{
      Pagination: XIVPagination
      Results: XIVContentIndexItem[]
    }> => {
      const standardIndex = this.standardizeContentIndex(index)
      if (!standardIndex) {
        throw new Error('Invalid index')
      }
      return this.api
        .get<XIVContentIndex[]>(`content/${standardIndex}`, {
          query: { page, limit },
        })
        .then(({ data }) => data as any)
    },
    get: async <T = any>(
      index: XIVContentIndex,
      id: number | string
    ): Promise<T> => {
      const standardIndex = this.standardizeContentIndex(index)
      if (!standardIndex) {
        throw new Error('Invalid index')
      }
      if (['string', 'number'].includes(typeof id) === false) {
        throw new Error('Invalid id')
      }
      return this.api.get(`${standardIndex}/${id}`).then(({ data }) => data)
    },
  }

  // Sugar
  async action(id: number) {
    return this.contents.get<XIVActionData>('action', id)
  }
  async classJob(id: number) {
    return this.contents.get<XIVClassJobData>('classjob', id)
  }
  async item(id: number) {
    return this.contents.get<XIVItemData>('item', id)
  }
}
