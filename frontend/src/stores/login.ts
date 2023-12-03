import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('user', () => {
    const username = ref('')
    const password = ref('')
    const isLoggedIn = ref(false)
    function login() {
        return
    }
    return { login, username, password, isLoggedIn }
})
