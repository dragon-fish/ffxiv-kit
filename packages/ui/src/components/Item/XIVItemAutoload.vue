<template lang="pug">
XIVItem(
  :item='item',
  :default-hq='defaultHq',
  :error='error',
  ref='containerRef'
)
</template>

<script setup lang="ts">
import type { XIVItemData } from '@ffxiv-kit/api/dist/types/XIVItem'

const x = useXIVApi()
const props = withDefaults(
  defineProps<{
    itemId?: number
    itemName?: string
    defaultHq?: boolean
  }>(),
  {
    itemId: 1,
    itemName: '',
    defaultHq: true,
  }
)
const emit = defineEmits<{
  'update:itemId': [value: number]
  'update:itemName': [value: string]
}>()

const containerRef = ref<HTMLElement>()
const item = ref<XIVItemData>()
const error = ref<Error>()

async function init() {
  if (item.value?.ID === props.itemId) return
  reset()

  const result = await fetchItemData().catch((e) => {
    error.value = e
    return null as any
  })
  if (result) {
    emit('update:itemId', result.ID)
    emit('update:itemName', result.Name)
    item.value = result
  } else {
    error.value = new Error('未找到物品')
  }
}
function reset() {
  item.value = undefined
  error.value = undefined
}

async function fetchItemData() {
  if (props.itemId) {
    return x.api.item(props.itemId)
  } else if (props.itemName) {
    return x.api
      .search(props.itemName, {
        indexes: ['item'],
        limit: 1,
      })
      .then(({ Results }) => {
        if (Results.length) {
          return x.api.item(+Results[0].ID)
        }
      })
  }
}

const observer = useIntersectionObserver(containerRef, ([entry]) => {
  if (entry.isIntersecting) {
    init()
    observer.pause()
  }
})
onBeforeUnmount(() => {
  observer?.stop()
})
watch(
  computed(() => [props.itemId, props.itemName]),
  () => {
    reset()
    observer?.resume()
  }
)
</script>

<style scoped lang="sass"></style>
