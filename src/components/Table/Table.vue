<template>
  <div v-if="contacts && contacts.length" class="styledTable__container">
    <table class="syledTable">
      <thead>
        <TableRow class="styledTable__rowHeading">
          <TableHead class="syledTable__icon"> </TableHead>
          <TableHead class="syledTable__contact">Contatos</TableHead>
          <TableHead class="syledTable__email">E-mail</TableHead>
          <TableHead class="syledTable__phone">Telefone</TableHead>
        </TableRow>
      </thead>
      <tbody>
        <TableRow
          v-for="{ id, name, color, email, phone, highlighted } in orderedContacts"
          :key="id"
          class="syledTable__row"
          :class="{ highlighted }"
        >
          <TableData class="syledTable__icon">
            <Icon
              :letter="name?.trim().charAt(0).toUpperCase() || '?'"
              :color="color || 'black'"
            />
          </TableData>
          <TableData class="syledTable__contact">{{ name }}</TableData>
          <TableData class="syledTable__email">{{ email }}</TableData>
          <TableData class="syledTable__phone">{{ phone }}</TableData>
          <TableData class="syledTable__actions">
            <div class="syledTable__buttonsContainer">
              <button class="syledTable__button" @click="handleEdit(id)">
                <SVGEdit fill="#9198AF" />
              </button>
              <button
                class="syledTable__button"
                @click="handleConfirmDeletion(id)"
              >
                <SVGDelete fill="#9198AF" />
              </button>
            </div>
          </TableData>
        </TableRow>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import SVGDelete from '../../svgs/SVGDelete.vue'
import SVGEdit from '../../svgs/SVGEdit.vue'
import { Contact } from '../../types/interfaces'
import Icon from './Icon.vue'
import TableData from './TableData.vue'
import TableHead from './TableHead.vue'
import TableRow from './TableRow.vue'

export default defineComponent({
  name: 'Table',
  components: {
    SVGDelete,
    SVGEdit,
    Icon,
    TableRow,
    TableHead,
    TableData
  },
  props: {
    contacts: Array as () => Contact[]
  },
  data: () => ({
    localContacts: [] as Contact[]
  }),
  watch: {
    contacts: {
      handler(contacts) {
        this.localContacts = contacts
      },
      immediate: true
    }
  },
  computed: {
    orderedContacts(): Contact[] {
      const clone = this.localContacts.slice()
      const sorted = clone.sort(this.sortAlphabetically)
      return sorted
    }
  },
  methods: {
    ...mapActions({
      handleEdit: 'EDIT_CONTACT',
      handleConfirmDeletion: 'CONFIRM_DELETION'
    }),
    sortAlphabetically(a: Contact, b: Contact) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    }
  }
})
</script>

<style lang="scss" scoped>
.syledTable {
  width: 100%;
  background-color: #fff;
  border-radius: 0.25rem;
  border-width: 1px;
  border-collapse: separate;
  border-color: var(--lineColor);

  &__row {
    &:hover {
      background-color: var(--lightPinkColor);
    }
  }

  &__icon {
    width: 2.5rem;
    @media (min-width: 1280px) {
      width: 2.9375rem; // 47px
    }
  }

  &__contact {
    width: 10rem;
    @media (min-width: 1280px) {
      width: 20.9375rem; // 335px
    }
  }

  &__email {
    width: 10rem;
    @media (min-width: 1280px) {
      width: 28.0625rem; // 449px
    }
  }

  &__phone {
    width: 10rem;
    @media (min-width: 1280px) {
      width: 19.5rem; // 312px
    }
  }

  &__actions {
    padding-right: 1rem;
    margin-left: 1rem;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  &__buttonsContainer {
    display: flex;
    gap: 1.5rem;
  }

  &__button {
    cursor: pointer;
  }
}

.styledTable__rowHeading {
  border-top-width: 0;
}

.styledTable__container {
  overflow-x: auto;
}
.highlighted {
  background-color: var(--lightPinkColor);
}
</style>
