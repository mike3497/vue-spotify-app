import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import type { UserProfile } from '@/models/userProfile';
import type { UserTopItems } from '@/models/userTopItems';
import type { UserTopItemsType } from '@/types/userTopItemsType';
import { UserTopItemsTimeRange } from '@/types/userTopItemsTimeRange';

export class UserService {
  static async fetchProfile(): Promise<UserProfile> {
    const authStore = useAuthStore();

    const response = await axios.get<UserProfile>('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + authStore.accessToken
      }
    });

    return response.data;
  }

  static async fetchTopItems(
    type: UserTopItemsType,
    timeRange: UserTopItemsTimeRange = UserTopItemsTimeRange.MEDIUM_TERM,
    limit: number = 20,
    offset: number = 5
  ): Promise<UserTopItems> {
    const authStore = useAuthStore();

    const args = new URLSearchParams({
      time_range: timeRange,
      limit: limit.toString(),
      offset: offset.toString()
    });

    const response = await axios.get<UserTopItems>(
      `https://api.spotify.com/v1/me/top/${type}?` + args,
      {
        headers: {
          Authorization: 'Bearer ' + authStore.accessToken
        }
      }
    );

    return response.data;
  }
}
