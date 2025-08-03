<template >
  <div class="slidev-layout grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full w-full px-8 py-12">
    <div class="prose max-w-none">
      <slot />
    </div>
    <div>
      <img :src="image" class="w-full rounded-xl shadow-lg object-contain" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>
