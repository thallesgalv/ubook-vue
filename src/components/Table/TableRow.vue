<template>
  <tr class="styledTableRow">
    <slot></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableRow'
})
</script>

<style lang="scss" scoped>
.styledTableRow {
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  transition-property: background-color, border-color;
  display: flex;
  border-top-width: 1px;
  border-color: var(--lineColor);
}
</style>
