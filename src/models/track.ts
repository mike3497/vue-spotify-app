import type { Artist } from '@/models/artist';
import type { Album } from '@/models/album';
import type { RestrictionReason } from '@/types/restrictionReason';

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids: {
    isrc?: string;
    ean?: string;
    upc?: string;
  };
  external_urls: {
    spotify?: string;
  };
  href?: string;
  id?: string;
  is_playable?: boolean;
  restrictions?: {
    reason?: RestrictionReason;
  };
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
}
