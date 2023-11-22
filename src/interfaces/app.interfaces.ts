import { IPost } from "./post.interfaces";
import { IUser } from "./user.interfaces";

export interface IAppState {
  post: IPost | null,
  user: IUser | null,
}

export type IPostAndUser = Omit<IAppState, "app">
