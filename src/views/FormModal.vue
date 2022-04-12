<template>
  <div v-if="modalStatus === 'create' || modalStatus === 'edit'">
    <Modal
      :title="
        (modalStatus === 'create' && 'Criar novo contato') ||
        (modalStatus === 'edit' && 'Editar Contato') ||
        ''
      "
    >
      <Form />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Form from '../components/Form.vue'
import Modal from '../components/Modal/Modal.vue'

export default defineComponent({
  name: 'FormModal',
  components: {
    Modal,
    Form
  },
  computed: {
    ...mapGetters({
      modalStatus: 'GET_MODAL_STATUS'
    })
  }
})
</script>
