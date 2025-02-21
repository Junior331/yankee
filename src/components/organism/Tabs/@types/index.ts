export interface genericCommet {
  id: number;
  time: string;
  name: string;
  likes: number;
  avatar: string;
  answers: never[];
  description: string;
}

export interface lastComment {
  name: string;
  avatar: string;
  description: string;
}

export interface avatarStack {
  name: string;
  avatar: string;
}

export interface post {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
    userTag: string;
  };
  likes: number;
  liked: boolean;
  image: string[];
  location: string;
  isFollow: boolean;
  description: string;
  comments: genericCommet[];
  last_comment?: lastComment;
  listAvatarStack?: avatarStack[];
}

export interface ICommunity {
  posts: post[];
  toggleLike: (postId: number) => void;
}

export interface trend {
  id: number;
  posts: number;
  title: string;
}

export interface ITrending {
  trendings: trend[];
}

export interface IYourFriend extends ICommunity {}
