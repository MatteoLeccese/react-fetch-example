import { ICommentsState } from "./comments.interfaces";
import { IPhotoState } from "./photos.interfaces";
import { IPostState } from "./post.interfaces";
import { IUsersState } from "./user.interfaces";
import { IAppState } from './app.interfaces';

export interface RootStoreState {
  users: IUsersState,
  posts: IPostState,
  comments: ICommentsState,
  photo: IPhotoState,
  app: IAppState,
}
