<template>
  <h1 class="modal__header">
    <slot></slot>
  </h1>
  <Line />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Line from '../Line.vue'

export default defineComponent({
  name: 'ModalHeader',
  components: {
    Line
  }
})
</script>

<style lang="scss" scoped>
.modal__header {
  padding: 1rem;
  padding-bottom: 0.75rem;
}
</style>
