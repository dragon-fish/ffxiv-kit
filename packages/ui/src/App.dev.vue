<template lang="pug">
main
  .flex.flex-wrap.gap-2
    div: XIVItem(:item='item')
</template>

<script setup lang="ts">
const api = useXIVApi()

const item = ref<any>()

api.api.item(39161).then((data) => {
  item.value = data
})
</script>

<style lang="sass" scoped></style>
