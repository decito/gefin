<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter().getRoutes()
</script>

<template>
  <nav class="w-full absolute bottom-0 p-6 text-center">
    <RouterLink
      v-for="route in router"
      :key="route.name"
      :to="route.path"
      class="inline-block border-l border-divider-light-2 px-4 capitalize dark:border-dark-2"
    >
      <i :class="`fas fa-${route.meta.icon}`"></i> {{ route.name }}
    </RouterLink>
  </nav>
</template>
