export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface IPostState {
  posts: IPost[],
  loading: boolean,
  error: undefined | string,
}

export interface IPostState {
  posts: IPost[],
  loading: boolean,
  error: undefined | string,
}
