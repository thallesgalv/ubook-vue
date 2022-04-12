<template>
  <Button @click="handleClick" class="styledCreateButton">
    <SVGPlus fill="#FA7268" />
    Criar contato
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SVGPlus from '../svgs/SVGPlus.vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'CreateButton',
  components: {
    Button,
    SVGPlus
  },
  methods: {
    handleClick() {
      this.$store.commit('SET_MODAL_STATUS', 'create')
    }
  }
})
</script>

<style lang="scss" scoped>
.styledCreateButton {
  padding: 0.5rem 1rem;
  padding-right: 1.375rem;
  color: var(--lightRedColor);
  background-color: var(--lightYellowColor);
}
</style>
