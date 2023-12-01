import { useDark, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'

const useDarkModeStore = defineStore('darkMode', () => {
   const isDark = useDark()
   const toggleDark = useToggle(isDark)

   return { isDark, toggleDark }
})

export default useDarkModeStore
