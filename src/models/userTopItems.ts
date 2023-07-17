import type { Artist } from '@/models/artist';
import type { Track } from '@/models/track';

export interface UserTopItems {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Artist[] | Track[];
}
