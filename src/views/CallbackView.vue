<template>
  <div>
    <h1>Logging in...</h1>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const codeVerifier = localStorage.getItem('code_verifier');
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_CALLBACK_URL;

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  });
  const data = await response.json();
  authStore.accessToken = data.access_token;
  authStore.refreshToken = data.refresh_token;

  router.push('/');
});
</script>
