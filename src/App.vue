<template>
  <div class="styledApp">
    <Header />
    <Main>
      <ContactList />
    </Main>
    <FormModal />
    <DeleteModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import ContactList from './views/ContactList.vue'
import DeleteModal from './views/DeleteModal.vue'
import FormModal from './views/FormModal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
    ContactList,
    DeleteModal,
    FormModal
  }
})
</script>

<style lang="scss">
.styledApp {
  background-color: var(--backgroundColor);
  font-family: var(--fontPrimary);
}
</style>
