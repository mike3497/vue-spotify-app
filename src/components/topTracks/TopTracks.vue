<template>
  <div class="container mx-auto px-4">
    <h1 class="font-bold text-white text-2xl mb-2">Your Top Tracks</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="(track, index) in userTopItems?.items"
        :key="track.id"
        class="bg-zinc-800 text-white p-4 rounded-lg"
      >
        <TopTrackCard :track="track" :ranking="index + 1" />
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
import TopTrackCard from '@/components/topTracks/TopTrackCard.vue';

const userTopItems = ref<UserTopItems | null>(null);

onMounted(async () => {
  userTopItems.value = await UserService.fetchTopItems(
    UserTopItemsType.TRACKS,
    UserTopItemsTimeRange.LONG_TERM
  );
});
</script>
