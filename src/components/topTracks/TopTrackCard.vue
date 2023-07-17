<template>
  <div>
    <p class="font-bold text-ellipsis line-clamp-1">{{ track.name }}</p>
    <p>{{ track.artists[0].name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/models/track';
import type { PropType } from 'vue';

const props = defineProps({
  track: {
    type: Object as PropType<Track>,
    required: true
  },
  ranking: {
    type: Number,
    required: true
  }
});
</script>
