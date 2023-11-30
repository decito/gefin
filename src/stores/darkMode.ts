import { useDark, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
   const isDark = useDark()
   const toggleDark = useToggle(isDark)

   return { isDark, toggleDark }
})
