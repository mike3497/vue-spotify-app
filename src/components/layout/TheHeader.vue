<template>
  <header class="bg-zinc-800 text-white p-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-row justify-between">
        <h1><i class="fa-solid fa-music mr-2"></i>TopTunes</h1>
        <div class="flex flex-row">
          <button @click="authStore.logout">
            <i class="fa-solid fa-right-from-bracket mr-2"></i>Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>
