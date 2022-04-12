<template>
  <section class="emptyContacts__container">
    <SVGBook />
    <p class="emptyContacts__message">Nenhum contato foi criado ainda.</p>
    <CreateButton class="syledCreateButton" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreateButton from '../components/CreateButton.vue'
import SVGBook from '../svgs/SVGBook.vue'

export default defineComponent({
  name: 'EmptyContacts',
  components: {
    CreateButton,
    SVGBook
  }
})
</script>

<style lang="scss" scoped>
.emptyContacts {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 7rem;
  }

  &__message {
    color: var(--darkColor);
  }
}

.syledCreateButton {
  padding: 0.75rem 1rem;
  padding-right: 1.375rem;
}
</style>
