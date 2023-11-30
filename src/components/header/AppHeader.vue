<script setup lang="ts">
import { MoonIcon, SunIcon } from '@radix-icons/vue'
import { useDarkModeStore } from '@/stores/darkMode'
import { storeToRefs } from 'pinia'

const store = useDarkModeStore()
const { isDark } = storeToRefs(store)
const { toggleDark } = store
</script>

<template>
   <div class="border-b">
      <div class="flex h-16 items-center px-4">
         <TeamSwitcher />

         <MainNav class="mx-6" />

         <div class="ml-auto flex items-center space-x-4">
            <div class="mr-6">
               <SunIcon
                  v-if="isDark"
                  class="h-6 w-6 cursor-pointer text-blue-500"
                  @click="toggleDark()"
               />
               <MoonIcon
                  v-else
                  class="h-6 w-6 cursor-pointer text-blue-500"
                  @click="toggleDark()"
               />
            </div>

            <AppSearch />

            <UserNav />
         </div>
      </div>
   </div>
</template>
