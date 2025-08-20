<template >
  <div class="slidev-layout grid grid-cols-2 gap-8 w-full px-8">
    <div class="max-w-none">
      <slot />
    </div>
	<div class="flex items-center justify-center">
      <img :src="image" class="h-full max-w-md rounded-xl shadow-lg object-contain" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>
