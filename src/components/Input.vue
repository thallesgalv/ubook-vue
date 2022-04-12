<template>
  <div class="styledInput__container">
    <label :htmlFor="name" class="styledInput__label">
      {{ label }}
    </label>
    <input
      required
      autoComplete="off"
      :maxlength="maxlength"
      :name="name"
      :type="type || 'text'"
      class="styledInput"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    label: String,
    maxlength: String,
    name: String,
    type: String,
    modelValue: String
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.styledInput {
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--lineColor);

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__label {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>
