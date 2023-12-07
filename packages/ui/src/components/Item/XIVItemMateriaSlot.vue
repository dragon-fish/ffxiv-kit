<template lang="pug">
XIVAttrsGroup.item-materia-slot(header='魔晶石工艺', :attrs='attrs', :cols='2')
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const props = defineProps<XIVItemData>()

const attrs = computed(() => [
  {
    label: '安全孔数',
    value: props.MateriaSlotCount,
  },
  {
    label: '禁断镶嵌',
    value: boolToString(props.IsAdvancedMeldingPermitted),
  },
])
</script>

<style scoped lang="sass"></style>
