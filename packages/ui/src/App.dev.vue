<template lang="pug">
main
  h2 XIVItem
  .flex.flex-wrap.gap-2
    .flex-auto(v-for='item in itemList')
      XIVItem(:item='item', :error='error')
  h2 XIVItemAutoload
  .flex.flex-wrap.gap-2
    .flex-auto(v-for='item in itemList')
      XIVItemAutoload(:item-id='item.ID')
</template>

<script setup lang="ts">
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const api = useXIVApi()

const error = ref<Error>()
const itemList = ref<XIVItemData[]>([])

init()
async function init() {
  error.value = undefined
  itemList.value = []

  const { Results: searchResults } = await api.api.search('曼德维尔惊异', {
    indexes: ['item'],
    limit: 3,
  })

  itemList.value = await Promise.all(
    [...searchResults, { ID: 24280 }, { ID: 24637 }].map(({ ID }) => {
      return api.api.item(+ID).catch((e) => {
        error.value = e
        return undefined as any
      })
    })
  )
}
</script>

<style lang="sass" scoped></style>
