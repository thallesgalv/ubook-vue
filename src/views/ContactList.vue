<template>
  <div v-if="contactList.length === 0">
    <EmptyContacts />
  </div>

  <section v-else class="emptySearch__container">
    <p
      v-if="searchTerm && filteredContactList.length === 0"
      class="emptySearch__message"
    >
      Nenhum contato corresponde a busca.
    </p>
    <Table :contacts.="filteredContactList" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Table from '../components/Table/Table.vue'
import { LOCAL_STORAGE_KEY } from '../constants'
import { Contact } from '../types/interfaces'
import EmptyContacts from './EmptyContacts.vue'

export default defineComponent({
  name: 'ContactList',
  components: {
    EmptyContacts,
    Table
  },
  computed: {
    ...mapGetters({
      contactList: 'GET_CONTACT_LIST',
      searchTerm: 'GET_SEARCH_TERM',
      highlighList: 'GET_HIGHLIGHT_LIST'
    }),
    filteredContactList(): Contact[] {
      return this.contactList.filter(
        (contact: Contact) =>
          contact.name
            .toLowerCase()
            .trim()
            .includes(this.searchTerm.toLowerCase()) ||
          contact.email
            .toLowerCase()
            .trim()
            .includes(this.searchTerm.toLowerCase()) ||
          contact.phone
            .toLowerCase()
            .trim()
            .includes(this.searchTerm.toLowerCase())
      )
    }
  },
  watch: {
    contactList: {
      handler() {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(this.contactList)
        )
        const [firstItem] = this.highlighList

        if (firstItem) {
          const finded = this.contactList.find(
            (contact: Contact) => contact.id === firstItem
          )
          this.handleHighlight(finded)
          const removeFromHighlighList = this.highlighList.filter(
            (id: string) => id !== firstItem
          )
          this.$store.commit('SET_HIGHLIGHT_LIST', removeFromHighlighList)
        }
      },
      deep: true
    }
  },
  methods: {
    handleHighlight(contact: Contact) {
      if (contact.id && contact.highlighted) {
        setTimeout(() => {
          contact.highlighted = false
        }, 10000)
      }
    }
  },
  created() {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storage) {
      const parsed: Contact[] = JSON.parse(storage)
      const cleanHighlighted = parsed.map((contact) => {
        contact.highlighted = false
        return contact
      })
      this.$store.commit('SET_CONTACT_LIST', cleanHighlighted)
    }
  }
})
</script>

<style lang="scss" scoped>
.emptySearch {
  &__container {
    margin-top: 1rem;
  }

  &__message {
    text-align: center;
  }
}
</style>
