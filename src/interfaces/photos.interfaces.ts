export interface IPhoto {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export interface IPhotoState {
  photo: IPhoto | null,
  loading: boolean,
  error: undefined | string,
}
