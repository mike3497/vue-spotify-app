import type { Image } from '@/models/image';

export interface Artist {
  external_urls?: {
    spotify?: string;
  };
  followers?: {
    href?: string | null;
    total?: number;
  };
  genres?: string[];
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
