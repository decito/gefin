<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
   <nav
      :class="
         cn(
            'flex items-center space-x-4 text-muted-foreground lg:space-x-6',
            $attrs.class ?? ''
         )
      "
   >
      <router-link
         to="/dashboard"
         class="text-sm font-medium transition-colors hover:text-primary"
      >
         Dashboard
      </router-link>
      <router-link
         to="/sobre"
         class="text-sm font-medium transition-colors hover:text-primary"
      >
         Sobre
      </router-link>
   </nav>
</template>
