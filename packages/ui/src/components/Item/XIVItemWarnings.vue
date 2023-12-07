<template lang="pug">
XIVAttrsGroup.item-warning(
  v-if='attrs.length',
  header='',
  :attrs='attrs',
  :cols='2'
)
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const props = defineProps<XIVItemData>()

const attrs = computed(() => {
  const p = [] as {
    id?: number
    label: string
    value?: number | string
    status?: 'success' | 'warning'
  }[]

  if (props.PriceLow <= 0) {
    p.push({
      label: '不可出售',
      status: 'warning',
    })
  }

  if (props.IsUntradable) {
    p.push({
      label: '不可在市场出售',
      status: 'warning',
    })
  }

  if (props.IsUnique) {
    p.push({
      label: '只能持有一个',
      status: 'warning',
    })
  }

  return p
})
</script>

<style scoped lang="sass"></style>
