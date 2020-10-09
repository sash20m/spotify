export interface Item {
  added_at?: string;
  track: {
    album: {
      images: {
        height: number;
        url: string;
      }[];
      name: string;
    };

    name: string;
    artists: {
      name: string;
    }[];
    duration_ms: number;
    id: string;
    uri: string;
  };
}

export interface Tracks {
  total: number;
  items: Item[];
}
export interface Playlist {
  added_at: string;
  id: string;
  name: string;
  description: string;
  owner: {
    display_name: string;
  };
  images: {
    url: string;
  }[];
  tracks: Tracks;
  uri: string;
}

export interface Playlists {
  message: string;
  playlists: {
    items: Playlist[];
  };
}
