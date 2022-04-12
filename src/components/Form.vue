<template>
  <form @submit.prevent="handleSubmit">
    <div class="styledForm__content">
      <Input label="Nome" name="name" v-model="formData.name" maxlength="30" />
      <Input
        type="email"
        label="E-mail"
        name="email"
        v-model="formData.email"
        maxlength="30"
      />
      <Input
        label="Telefone"
        name="phone"
        v-model="formData.phone"
        maxlength="15"
        class="styledForm__smallInput"
        v-maska="'(##) #####-####'"
      />
    </div>
    <Line />
    <div class="styledForm__buttonsContainer">
      <Button class="styledForm__button--secondary" @click="unmountModal"
        >Cancelar</Button
      >
      <Button class="styledForm__button--primary" :disabled="disabled"
        >Salvar</Button
      >
    </div>
  </form>
</template>

<script lang="ts">
import { maska } from 'maska'
import { v4 as uuid } from 'uuid'
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { COLORS } from '../constants'
import { Contact } from '../types/interfaces'
import Button from './Button.vue'
import Input from './Input.vue'
import Line from './Line.vue'

export default defineComponent({
  name: 'Form',
  components: {
    Input,
    Button,
    Line
  },
  directives: {
    maska
  },
  data: () => ({
    disabled: true,
    formData: {
      name: '',
      email: '',
      phone: ''
    }
  }),
  computed: {
    ...mapGetters({
      modalStatus: 'GET_MODAL_STATUS',
      contactList: 'GET_CONTACT_LIST',
      pickedContact: 'GET_PICKED_CONTACT'
    })
  },
  watch: {
    formData: {
      handler({ name, email, phone }) {
        if (name || email || phone) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
      unmountModal: 'UNMOUNT_MODAL',
      registerContact: 'REGISTER_CONTACT',
      updateContact: 'UPDATE_CONTACT',
      addToHighlighList: 'ADD_TO_HIGHLIGHT_LIST'
    }),
    handleSubmit() {
      if (this.modalStatus === 'create') {
        this.handleRegister()
      } else if (this.modalStatus === 'edit') {
        this.handleUpdate()
      }
    },
    handleRegister() {
      const id = uuid()
      const selectedColor = this.pickARandomColor()
      const newContact = {
        id: id,
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        color: selectedColor,
        highlighted: true
      }
      this.registerContact(newContact)
      this.addToHighlighList(id)
      this.clearForm()
      this.disabled = true
    },
    handleUpdate() {
      const changedContact = {
        ...this.pickedContact,
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone
      }
      this.updateContact(changedContact)
      this.unmountModal()
    },
    pickARandomColor() {
      const index = Math.floor(Math.random() * COLORS.length)
      return COLORS[index]
    },
    clearForm() {
      this.formData = {} as Contact
    }
  },
  mounted() {
    if (this.pickedContact?.id) {
      this.formData = {
        ...this.pickedContact
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.styledForm {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
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

  &__smallInput {
    width: 8rem;
  }
}
</style>
