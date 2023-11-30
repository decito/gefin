<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
   <nav
      :class="
         cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')
      "
   >
      <router-link
         to="/dashboard"
         class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
         active-class="!text-foreground"
      >
         Dashboard
      </router-link>
      <router-link
         to="/sobre"
         class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
         active-class="!text-foreground"
      >
         Sobre
      </router-link>
   </nav>
</template>
