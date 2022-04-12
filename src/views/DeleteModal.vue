<template>
  <div v-if="modalStatus === 'delete'">
    <Modal title="Excluir Contato">
      <p class="deleteModal__message">Deseja realmente excluir o contato?</p>
      <Line />
      <div class="deleteModal__buttonsContainer">
        <Button
          class="deleteModal__button--secondary"
          @click="unmountModal"
          >Cancelar</Button
        >
        <Button
          class="deleteModal__button--primary"
          @click="deleteContact"
          >Excluir</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Button from '../components/Button.vue'
import Line from '../components/Line.vue'
import Modal from '../components/Modal/Modal.vue'

export default defineComponent({
  name: 'DeleteModal',
  components: {
    Modal,
    Line,
    Button
  },
  computed: {
    ...mapGetters({
      modalStatus: 'GET_MODAL_STATUS'
    })
  },
  methods: {
    ...mapActions({
      unmountModal: 'UNMOUNT_MODAL',
      deleteContact: 'DELETE_CONTACT'
    })
  }
})
</script>

<style lang="scss" scoped>
.deleteModal {
  &__message {
    padding-top: 1.25rem;
    padding-left: 1.5rem;
    padding-bottom: 3.5rem;
  }

  &__buttonsContainer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1rem;
  }

  &__button--primary {
    color: #fff;
    background-color: var(--lightRedColor);
  }

  &__button--secondary {
    color: var(--lightRedColor);
    background-color: transparent;
  }
}
</style>
