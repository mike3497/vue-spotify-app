import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import type { UserProfile } from '@/models/userProfile';
import { UserService } from '@/services/userService';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();

  const accessToken = useLocalStorage('access_token', '');
  const refreshToken = useLocalStorage('refresh_token', '');
  const userProfile = ref<UserProfile | null>(null);

  const isAuthenticated = computed<boolean>(() => {
    if (!accessToken.value) {
      return false;
    }

    return true;
  });

  const fetchProfile = async () => {
    const response = await UserService.fetchProfile();
    if (response) {
      userProfile.value = response;
    }
  };

  const logout = () => {
    accessToken.value = '';
    refreshToken.value = '';
    userProfile.value = null;
    router.push({ name: 'login' });
  };

  watch(accessToken, async () => {
    if (accessToken.value && !userProfile.value) {
      await fetchProfile();
    }
  });

  return {
    accessToken,
    isAuthenticated,
    logout,
    refreshToken,
    userProfile
  };
});
