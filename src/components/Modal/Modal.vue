<template>
  <section class="modal__container" @click="handleCloseModal" ref="closeArea">
    <div class="modal__content">
      <ModalHeader> {{ title }}</ModalHeader>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import ModalHeader from './ModalHeader.vue'

export default defineComponent({
  name: 'Modal',
  props: {
    title: String
  },
  components: {
    ModalHeader
  },
  methods: {
    ...mapActions({
      unmountModal: 'UNMOUNT_MODAL'
    }),
    handleCloseModal(event: Event) {
      if (event) {
        const { target } = event
        if (target === this.$refs.closeArea) this.unmountModal()
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  &__container {
    height: 100vh;
    width: 100%;
    background-color: var(--modalColor);
    position: fixed;
    top: 0;
    display: grid;
    place-content: center;
  }

  &__content {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    margin-right: auto;
    margin-left: auto;
    color: var(--darkColor);
    min-width: 20.625rem; //330px
    animation: var(--showAnimate);
    @media (min-width: 768px) {
      min-width: 27rem; //432px
    }
  }
}
</style>
