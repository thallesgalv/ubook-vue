<template>
  <header class="styledHeader">
    <Logo />
    <div v-if="contactList.length" class="createButtonContainer">
      <CreateButton />
    </div>
    <div class="searchBarContainer">
      <SearchBar />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Logo from '../svgs/Logo.vue'
import CreateButton from './CreateButton.vue'
import SearchBar from './SearchBar.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    CreateButton,
    SearchBar
  },
  computed: {
    ...mapGetters({
      contactList: 'GET_CONTACT_LIST'
    })
  }
})
</script>

<style lang="scss" scoped>
.styledHeader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  &:focus {
    border-style: none;
  }

  @media (min-width: 1024px) {
    height: 4rem;
    flex-wrap: nowrap;
  }
}
.createButtonContainer {
  @media (min-width: 1024px) {
    margin-right: 1.5rem;
    margin-left: 3.75rem;
  }
}
.searchBarContainer {
  width: 100%;
  @media (min-width: 1024px) {
    flex: 1 1 0%;
  }
}
</style>
