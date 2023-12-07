<template lang="pug">
XIVCard.xiv-item
  .loading(v-if='!item')
    div Loading...
  main.item-main(
    v-else,
    :data-item-id='item.ID',
    :data-item-rarity='item.Rarity'
  )
    .item-title.flex.gap-2
      .item-title__icon.leading-0
        img(:src='api.assetPath(item.Icon)', w='10', h='10')
      .item-title__desc.leading-5
        h3.item-title__name(m='0', text='1.1em normal', font='normal') {{ item.Name }}
        .item-title__category(text='3') {{ item.ItemUICategory.Name }}
    .item-base-stats.flex.gap-4
      .item-base-stats-item.flex-1(v-for='i in baseStats', :key='i.id')
        .item-base-stats-item__name {{ i.label }}
        .item-base-stats-item__value {{ i.value }}
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const api = useXIVApi()

const props = withDefaults(
  defineProps<{
    item: XIVItemData
    defaultHq?: boolean
  }>(),
  {
    item: undefined,
    defaultHq: false,
  }
)

const baseStats = computed(() => {
  if (!props.item) return []
  const all: { id: number; label: string; value: number }[] = [
    {
      id: 12,
      label: '物理基本性能',
      value: props.item.DamagePhys,
    },
    {
      id: 13,
      label: '魔法基本性能',
      value: props.item.DamageMag,
    },
    {
      id: 14,
      label: '攻击间隔',
      value: props.item.DelayMs / 1000,
    },
    {
      id: 17,
      label: '格挡发动力',
      value: props.item.BlockRate,
    },
    {
      id: 18,
      label: '格挡性能',
      value: props.item.Block,
    },
    {
      id: 21,
      label: '物理防御力',
      value: props.item.DefensePhys,
    },
    {
      id: 24,
      label: '魔法防御力',
      value: props.item.DefenseMag,
    },
  ]
  return all.filter((stat) => stat.value)
})
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
