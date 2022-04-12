import { createStore } from 'vuex'
import { Contact, ModalStatus } from '../types/interfaces'

const store = createStore({
  state: {
    contactList: [] as Contact[],
    modalStatus: null as ModalStatus,
    searchTerm: '',
    pickedContact: null as Contact | null,
    highlighList: [] as string[],
  },
  getters: {
    GET_CONTACT_LIST: state => state.contactList,
    GET_MODAL_STATUS: state => state.modalStatus,
    GET_SEARCH_TERM: state => state.searchTerm,
    GET_PICKED_CONTACT: state => state.pickedContact,
    GET_HIGHLIGHT_LIST: state => state.highlighList

  },
  mutations: {
    SET_CONTACT_LIST: (state, payload) => (state.contactList = payload),
    SET_MODAL_STATUS: (state, payload) => (state.modalStatus = payload),
    SET_SEARCH_TERM: (state, payload) => (state.searchTerm = payload),
    SET_PICKED_CONTACT: (state, payload) => (state.pickedContact = payload),
    SET_HIGHLIGHT_LIST: (state, payload) => (state.highlighList = payload),
  },
  actions: {
    UNMOUNT_MODAL: ({ commit }) => {
      commit('SET_MODAL_STATUS', null)
      commit('SET_PICKED_CONTACT', null)
    },
    REGISTER_CONTACT: ({ commit, state }, payload) => {
      commit('SET_CONTACT_LIST', [...state.contactList, payload])
    },
    FIND_CONTACT: ({ commit, state }, payload) => {
      const query = state.contactList.find(contact => contact.id === payload)
      if (query) commit('SET_PICKED_CONTACT', query)
    },
    EDIT_CONTACT: ({ commit, dispatch }, payload) => {
      dispatch('FIND_CONTACT', payload)
      commit('SET_MODAL_STATUS', 'edit')
    },
    UPDATE_CONTACT: ({ commit, state }, payload) => {
      const filteredList = state.contactList.filter(
        (contact) => contact.id !== state.pickedContact?.id
      )
      commit('SET_CONTACT_LIST', [...filteredList, payload])
    },
    CONFIRM_DELETION: ({ commit, dispatch }, payload) => {
      dispatch('FIND_CONTACT', payload)
      commit('SET_MODAL_STATUS', 'delete')
    },
    DELETE_CONTACT: ({ commit, state, dispatch }) => {
      if (state.pickedContact) {
        const listWithoutContact = state.contactList.filter(
          (contact) => contact.id !== state.pickedContact?.id
        )
        commit('SET_CONTACT_LIST', listWithoutContact)
        dispatch('UNMOUNT_MODAL')
      }
    },
    ADD_TO_HIGHLIGHT_LIST: ({ commit, state }, payload) => {
      commit('SET_HIGHLIGHT_LIST', [...state.highlighList, payload])
    }
  }
})

export default store
