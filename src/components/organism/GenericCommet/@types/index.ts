import { ReactNode } from "react";

export interface IGenericCommet {
  time: string;
  name: string;
  likes: number;
  avatar: string;
  description: string;
  answers: IGenericCommet[];
}
