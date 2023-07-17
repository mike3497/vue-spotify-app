<template>
  <div class="flex h-screen">
    <div class="m-auto w-1/3">
      <div class="bg-white p-8 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-6"><i class="fa-solid fa-music mr-2"></i>TopTunes</h2>
        <button
          class="w-full bg-green-500 text-white rounded-full py-2 px-4 hover:bg-green-600 transition-colors"
          @click="onLoginClicked"
        >
          <i class="fa-brands fa-spotify me-2"></i>Log in with Spotify
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateRandomString, generateCodeChallenge } from '@/helpers/pkceUtil';

const onLoginClicked = async () => {
  const codeVerifier = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-top-read';
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:5173/callback';

  localStorage.setItem('code_verifier', codeVerifier);

  const args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
};
</script>
