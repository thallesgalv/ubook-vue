<template>
  <div class="styledLine"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Line'
})
</script>

<style lang="scss" scoped>
.styledLine {
  height: 1px;
  background-color: var(--lineColor);
}
</style>
