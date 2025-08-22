
export interface IGenericCommet {
  id: number;
  likes: number;
  time: string;
  name: string;
  avatar: string;
  description: string;
  answers?: IGenericCommet[];
  onReply?: () => void;
}