<template lang="pug">
XIVAttrsGroup(header='特殊', :attrs='attrs', :cols='2')
</template>

<script setup lang="ts">
import {} from 'vue'
import type {
  XIVItemData,
  XIVBaseParam,
} from '@ffxiv-kit/api/dist/types/XIVItem'

const props = defineProps<XIVItemData>()

const attrs = computed(() => {
  const p = [] as {
    id?: number
    label: string
    value?: number | string
    status?: 'success' | 'warning'
  }[]
  for (let i = 0; i <= 5; i++) {
    const labelKey = `BaseParam${i}`
    const valueKey = `BaseParamValue${i}`

    const label = ((props as any)[labelKey] as XIVBaseParam)?.Name
    const value = `+${(props as any)[valueKey] as any}`
    if (label) {
      p.push({
        label,
        value,
      })
    }
  }
  return p
})
</script>

<style scoped lang="sass"></style>
