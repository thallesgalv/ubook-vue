<template>
  <button
    :disabled="disabled"
    class="styledButton"
    :class="{ disabledStyle: disabled }"
  >
    <span class="styledButton__content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    disabled: Boolean
  }
})
</script>

<style lang="scss" scoped>
.styledButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  border-radius: 1rem;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}
.disabledStyle {
  opacity: 0.32;
  cursor: not-allowed;
}
</style>
