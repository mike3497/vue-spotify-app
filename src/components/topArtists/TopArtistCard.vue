<template>
  <div>
    <span
      class="flex items-center justify-center bg-white text-black w-8 h-8 rounded-full font-bold text-sm absolute"
      >#{{ ranking }}</span
    >
    <img
      v-if="artist.images"
      class="aspect-square rounded-full object-cover mb-2"
      :src="artist.images[0].url"
    />
    <p class="text-ellipsis line-clamp-1 text-center">{{ artist.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Artist } from '@/models/artist';
import type { PropType } from 'vue';

const props = defineProps({
  artist: {
    type: Object as PropType<Artist>,
    required: true
  },
  ranking: {
    type: Number,
    required: true
  }
});
</script>
