<template>
  <th class="styledTableHead">
    <slot></slot>
  </th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableHead'
})
</script>

<style lang="scss" scoped>
.styledTableHead {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  text-align: left;
  color: var(--blueGreyColor);
}
</style>
