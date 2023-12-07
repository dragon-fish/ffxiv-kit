<template lang="pug">
.xiv-attrs-group
  .attrs-header(v-if='typeof header === "string"', leading-6)
    slot(name='header') {{ header }}
  .attrs-list(flex='1 ~ wrap', w-full, m-l-1)
    .attr-item.flex(
      v-for='attr in attrs',
      :style='{ width: `${100 / cols}%` }'
    )
      .attr-label.flex-1(
        v-if='attr.label',
        :class='`attr-${attr.status || "default"}`',
        :style='{ color: `var(--xiv-attr-${attr.status || "label"}-color)` }'
      ) {{ attr.label }}
      .attr-value.flex-1.whitespace-pre-wrap(v-if='attr.value') {{ attr.value }}
</template>

<script setup lang="ts">
import {} from 'vue'

withDefaults(
  defineProps<{
    header?: string
    attrs: {
      id?: number
      label?: string
      value?: number | string
      status?: 'success' | 'warning'
    }[]
    cols?: number
  }>(),
  {
    attrs: [] as any,
    cols: 2,
  }
)
</script>

<style scoped lang="sass">
.attrs-header
  border-bottom: 1px solid var(--xiv-attr-header-border-color)
  margin: 0.25em 0
  color: var(--xiv-attr-header-color)
</style>
