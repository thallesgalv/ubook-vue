<template>
  <td class="styledTableData">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableData'
})
</script>

<style lang="scss" scoped>
.styledTableData {
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
