<template lang="pug">
XIVCard.xiv-item
  .error(v-if='error')
    h3 {{ error.message || error }}
  .loading(v-if='!item')
    div Loading...
  main.item-main(
    v-else,
    :data-item-id='item.ID',
    :data-item-rarity='item.Rarity'
  )
    //- 道具名称标题
    .item-title.flex.gap-2
      .item-title__icon.leading-0
        img(:src='api.assetPath(item.Icon)', w='10', h='10')
      .item-title__desc.leading-5
        h3.item-title__name(
          m='0',
          text='1.1em normal',
          font='normal',
          :style='{ color: `var(--xiv-rarity-${item.Rarity}-color)` }'
        ) {{ item.Name }}
        .item-title__category(text='3') {{ item.ItemUICategory?.Name }}

    //- 可装备道具主属性
    XIVItemEquipSlot(v-if='item.EquipSlotCategory', v-bind='item')
    //- 道具简介
    XIVAttrsGroup(
      v-if='item.Description',
      :attrs='[{ value: item.Description }]',
      :cols='1'
    )
    //- 可装备道具副属性
    XIVItemBaseParams(v-if='item.BaseParam0', v-bind='item')
    //- 可食用道具副属性
    XIVItemFoodParams(v-if='item.Bonuses', v-bind='item')
    //- 魔晶石工艺
    XIVItemMateriaSlot(v-if='item.MateriaSlotCount', v-bind='item')
    //- 制作&修理
    XIVItemRepairParams(
      v-if='item.ItemRepair && item.ClassJobRepair',
      v-bind='item'
    )
    //- 道具警告
    XIVItemWarnings(v-bind='item')
</template>

<script setup lang="ts">
import {} from 'vue'
import type { XIVItemData } from '@tomestone/api/dist/types/XIVItem'

const api = useXIVApi()

const props = withDefaults(
  defineProps<{
    item?: XIVItemData
    defaultHq?: boolean
    error?: Error
  }>(),
  {
    item: undefined,
    defaultHq: false,
  }
)

props.item?.EquipSlotCategory
</script>

<style scoped lang="sass"></style>
