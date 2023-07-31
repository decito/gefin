<script setup lang="ts">
const isOpen = ref(false)

const onClick = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div class="absolute bottom-10 right-4 flex flex-col items-end">
    <section v-if="isOpen" class="bg-slate-500 rounded">
      <ul>
        <li>Opção 1</li>
        <li>Opção 2</li>
      </ul>
    </section>

    <button
      type="button"
      class="bg-slate-700 w-14 flex items-center justify-center h-14 rounded-full relative"
      @click="onClick"
    >
      <i
        class="fas fa-plus transition-all text-lg"
        :class="isOpen && '-rotate-45'"
      ></i>
    </button>
  </div>
</template>
