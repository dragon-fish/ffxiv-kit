import { XIVApi } from '@ffxiv-kit/api'

export const useXIVApi = defineStore('xivapi', () => {
  const api = new XIVApi()
  const assetPath = (path: string) => {
    const url = new URL(path, api.baseURL)
    return url.toString()
  }

  return {
    api,
    assetPath,
  }
})
