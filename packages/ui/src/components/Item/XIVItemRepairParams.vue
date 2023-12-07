<template lang="pug">
XIVAttrsGroup.item-repair-params(header='制作&修理', :attrs='attrs', :cols='1')
</template>

<script setup lang="ts">
import type { XIVItemData } from '@ffxiv-kit/api/dist/types/XIVItem'
import {} from 'vue'

const props = defineProps<XIVItemData>()

const attrs = computed(() => {
  const levelMeld = props.LevelEquip
  const levelRepair = Math.max(props.LevelEquip - 10, 1)

  console.info(props.ItemRepair)

  const list = [
    {
      label: '修理等级',
      value: `${props.ClassJobRepair?.Name} ${levelRepair}级以上`,
    },
    {
      label: '修理材料',
      // @ts-ignore                          ↓ 兼容性措施
      value: props.ItemRepair?.Item?.Name || props.ItemRepair?.Name,
    },
  ]

  if (props.MateriaSlotCount) {
    list.push({
      label: '镶嵌魔晶石等级',
      value: `${props.ClassJobRepair?.Name} ${levelMeld}级以上`,
    })
  }

  return list
})
</script>

<style scoped lang="sass"></style>
