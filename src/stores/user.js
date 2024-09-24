import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({ users: [] }),
  getters: {
    currentUser: state => state.users.pop()
  },
  actions: {
    setNewUser(name) {
      this.$patch(state => state.users.push(name))
    }
  },
  persist: true
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
