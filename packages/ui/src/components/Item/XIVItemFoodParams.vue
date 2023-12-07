<template lang="pug">
XIVAttrsGroup.item-food-params(header='特殊', :attrs='attrs', :cols='1')
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const props = defineProps<XIVItemData>()

const attrs = computed(() => {
  console.info(props.Bonuses)
  if (!props.Bonuses) return []
  return Object.entries(props.Bonuses).map(([key, val]) => {
    return {
      label: key,
      value: `+${val.Value}%（上限 ${val.Max}）`,
    }
  })
})
</script>

<style scoped lang="sass">
.item-food-params
  :deep(.attr-label)
    flex: 0
    white-space: nowrap
    margin-right: 0.5em
</style>
