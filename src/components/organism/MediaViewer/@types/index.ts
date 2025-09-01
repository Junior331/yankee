export interface MediaItem {
  id: number;
  name: string;
  image?: string;
  video?: string;
  type: 'image' | 'video';
}

export interface IMediaViewer {
  visible: boolean;
  mediaItem: MediaItem | null;
  onClose: () => void;
}