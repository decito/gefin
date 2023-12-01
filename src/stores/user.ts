import { useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
   const [isLoggedIn, authenticate] = useToggle()

   return { isLoggedIn, authenticate }
})

export default useUserStore
