<template>
  <div class="iconContainer">
    <span :style="{ backgroundColor: color }" class="iconContent">
      {{ letter }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    color: String,
    letter: String
  }
})
</script>

<style lang="scss" scoped>
.iconContainer {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 1.5rem;
}
.iconContent {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: 9999px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
}
</style>
