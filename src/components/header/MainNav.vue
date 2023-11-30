<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <router-link
      to="/"
      class="text-sm font-medium transition-colors hover:text-primary"
    >
      Overview
    </router-link>
    <router-link
      to="/about"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Customers
    </router-link>
    <a
      href="/"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Products
    </a>
    <a
      href="/"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Settings
    </a>
  </nav>
</template>
