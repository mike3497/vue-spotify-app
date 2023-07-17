<template>
  <div>
    <TheHeader />
    <div class="container mx-auto px-4 mt-4">
      <div class="mb-2">
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-l-full"
          :class="{ 'bg-green-600': selected === 'artists' }"
          @click="onTopArtistsClicked"
        >
          Artists
        </button>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-r-full"
          :class="{ 'bg-green-600': selected === 'tracks' }"
          @click="onTopTracksClicked"
        >
          Tracks
        </button>
      </div>
    </div>
    <TopArtists v-if="selected === 'artists'" />
    <TopTracks v-if="selected === 'tracks'" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TopArtists from '@/components/topArtists/TopArtists.vue';
import TopTracks from '@/components/topTracks/TopTracks.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import { ref } from 'vue';

const selected = ref<string>('artists');

const onTopArtistsClicked = () => {
  selected.value = 'artists';
};

const onTopTracksClicked = () => {
  selected.value = 'tracks';
};
</script>
