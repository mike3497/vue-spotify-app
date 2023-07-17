<template>
  <div class="container mx-auto px-4">
    <h1 class="font-bold text-white text-2xl mb-2">Your Top Artists</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
        v-for="(artist, index) in userTopItems?.items"
        :key="artist.id"
        class="bg-zinc-800 text-white p-4 rounded-lg"
      >
        <TopArtistCard :artist="artist" :ranking="index + 1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserTopItems } from '@/models/userTopItems';
import { UserService } from '@/services/userService';
import { UserTopItemsTimeRange } from '@/types/userTopItemsTimeRange';
import { UserTopItemsType } from '@/types/userTopItemsType';
import { ref, onMounted } from 'vue';
import TopArtistCard from '@/components/topArtists/TopArtistCard.vue';

const userTopItems = ref<UserTopItems | null>(null);

onMounted(async () => {
  userTopItems.value = await UserService.fetchTopItems(
    UserTopItemsType.ARTISTS,
    UserTopItemsTimeRange.LONG_TERM
  );
});
</script>
