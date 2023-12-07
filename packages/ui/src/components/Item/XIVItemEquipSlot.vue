<template lang="pug">
.xiv-item-equip-slot
  .base-stats.flex.gap-4
    .stat-item(
      v-for='stat in avaliableStats',
      flex='~ 1 col',
      items='end',
      m='y-2'
    )
      .attr-label(text='3', leading-6) {{ stat.label }}
      .attr-value(text='7', relative, leading-8)
        .z-1(relative) {{ stat.value }}
        .z-0(
          absolute,
          w-full,
          h-2,
          bottom-0,
          left-0,
          rounded-full,
          bg='[--xiv-attr-label-color]',
          opacity-50
        )
  XIVAttrsGroup(v-for='i in attrGroups', v-bind='i')
</template>

<script setup lang="ts">
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'
import {} from 'vue'
const props = defineProps<XIVItemData>()

const avaliableStats = computed(() => {
  if (!props) return []
  const all: { id: number; label: string; value: number | string }[] = [
    {
      id: 12,
      label: '物理基本性能',
      value: props.DamagePhys,
    },
    {
      id: 13,
      label: '魔法基本性能',
      value: props.DamageMag,
    },
    {
      id: 14,
      label: '自动攻击间隔',
      value: `${props.DelayMs / 1000}s`,
    },
    {
      id: 17,
      label: '格挡发动力',
      value: props.BlockRate,
    },
    {
      id: 18,
      label: '格挡性能',
      value: props.Block,
    },
    {
      id: 21,
      label: '物理防御力',
      value: props.DefensePhys,
    },
    {
      id: 24,
      label: '魔法防御力',
      value: props.DefenseMag,
    },
    // {
    //   id: -1,
    //   label: '物理自动攻击',
    //   value: ((((props.DamagePhys || 0) / 3) * props.DelayMs) / 1000).toFixed(
    //     2
    //   ),
    // },
  ]
  return all.filter((stat) => stat.value)
})

const attrGroups = computed(() => {
  return [
    // 品级
    {
      cols: 1,
      attrs: [
        {
          label: '品级',
          value: props.LevelEquip,
        },
      ],
    },
    // 装备等级
    {
      cols: 1,
      header: '',
      attrs: [
        {
          label: props.ClassJobCategory?.Name,
          status: 'success',
        },
        {
          label: props.LevelEquip + '级以上',
          status: 'success',
        },
      ],
    },
  ]
})
</script>

<style scoped lang="sass"></style>
