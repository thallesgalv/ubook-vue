<template>
  <main class="styledMain">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main'
})
</script>

<style lang="scss" scoped>
.styledMain {
  min-height: calc(100vh - 5rem);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
