<template>
  <div class="styledSearchBar__container">
    <input
      class="styledSearchBar"
      type="search"
      placeholder="Buscar..."
      v-model="model"
    />
    <div v-if="!model" class="styledSearchBar__svgContainer">
      <SVGSearch />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SVGSearch from '../svgs/SVGSearch.vue'

export default defineComponent({
  name: 'SearchBar',
  components: {
    SVGSearch
  },
  computed: {
    model: {
      get() {
        return this.$store.state.searchTerm
      },
      set(value: string) {
        this.$store.commit('SET_SEARCH_TERM', value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.styledSearchBar {
  background-color: var(--paleGreyColor);
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.25rem;

  &::placeholder {
    color: var(--blueGreyColor);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &__container {
    position: relative;
  }

  &__svgContainer {
    position: absolute;
    right: 0.5rem;
    top: 0.75rem;
  }
}
</style>
