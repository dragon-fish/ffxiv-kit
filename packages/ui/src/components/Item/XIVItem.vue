<template lang="pug">
XIVCard.xiv-item
  .loading(v-if='!item')
    div Loading...
  main.item-main(v-else, :data-item-rarity='item.Rarity')
    .item-title.flex.gap-2
      .item-title__icon.leading-0
        img(:src='api.assetPath(item.Icon)', w='10', h='10')
      .item-title__desc.leading-5
        h3.item-title__name(m='0', text='1.1em normal', font='normal') {{ item.Name }}
        .item-title__category(text='3') {{ item.ItemUICategory.Name }}
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const api = useXIVApi()

withDefaults(
  defineProps<{
    item: XIVItemData
    hq?: boolean
  }>(),
  {
    item: undefined,
    hq: false,
  }
)
</script>

<style scoped lang="sass">
.item-title__name
  [data-item-rarity='1'] &
    @apply rarity-1
  [data-item-rarity='2'] &
    @apply rarity-2
  [data-item-rarity='3'] &
    @apply rarity-3
  [data-item-rarity='4'] &
    @apply rarity-4
  [data-item-rarity='7'] &
    @apply rarity-7
</style>
