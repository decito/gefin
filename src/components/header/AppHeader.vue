<script setup lang="ts">
import { MoonIcon, SunIcon } from '@radix-icons/vue'
import { onMounted, ref } from 'vue'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', String(isDarkMode.value))

  handleDocumentClass()
}

const handleDocumentClass = () => {
  const html = document.documentElement
  if (isDarkMode.value) html.classList.add('dark')
  else html.classList.remove('dark')
}

onMounted(() => {
  const handler = localStorage.getItem('darkMode')
  if (handler === null) {
    isDarkMode.value = true
  }
  if (handler === 'true') {
    isDarkMode.value = true
  }
  if (handler === 'false') {
    isDarkMode.value = false
  }

  handleDocumentClass()
})
</script>

<template>
  <div class="border-b">
    <div class="flex h-16 items-center px-4">
      <TeamSwitcher />
      <MainNav class="mx-6" />
      <div class="ml-auto flex items-center space-x-4">
        <div class="mr-6">
          <SunIcon
            v-if="isDarkMode"
            class="h-6 w-6 cursor-pointer text-blue-500"
            @click="toggleDarkMode"
          />
          <MoonIcon
            v-else
            class="h-6 w-6 cursor-pointer text-blue-500"
            @click="toggleDarkMode"
          />
        </div>
        <DashboardSearch />
        <UserNav />
      </div>
    </div>
  </div>
</template>
