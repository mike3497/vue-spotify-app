import type { Image } from '@/models/image';
import type { AlbumType } from '@/types/albumType';
import type { ReleaseDatePrecision } from '@/types/releaseDatePrecision';

export interface Album {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  external_urls?: {
    spotify?: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
}
