<template lang="pug">
.xiv-card
  .xiv-card-inner
    slot
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style scoped lang="sass">
.xiv-card
  color: #dedede
  font-size: 16px
  background: linear-gradient(to bottom, #666 0%, #333 1em)
  border: 2px solid #bbac94
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2)
  border-radius: 0.5em
  display: inline-block
  box-sizing: border-box
  *
    box-sizing: border-box
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif
  .xiv-card-inner
    padding: 0.75em
    width: 320px
    max-width: 95vw
    max-height: 75vh
    overflow-y: auto
</style>
