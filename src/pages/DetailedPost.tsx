import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreState } from "../interfaces/store.interfaces";
import { setPostAndUserState } from "../store/appSlice";
import { IPost } from "../interfaces/post.interfaces";
import { IUser } from "../interfaces/user.interfaces";
import { IPostAndUser } from "../interfaces/app.interfaces";
import { useAppDispatch } from "../store/store";
import { fetchPhotos } from "../store/photosSlice";
import { fetchComments } from "../store/commentsSlice";

const DetailedPost = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const posts = useSelector((state: RootStoreState) => state.posts.posts);
  const users = useSelector((state: RootStoreState) => state.users.users);
  const comments = useSelector((state: RootStoreState) => state.comments.comments);
  const photo = useSelector((state: RootStoreState) => state.photo.photo);
  const app = useSelector((state: RootStoreState) => state.app);

  // This function finds the current post and user by the post id provided on the route. It will also search for it's comments and photo
  const findCurrentPostAndAuthor = useCallback(()=> {
    if (!Number.isInteger(Number(id))) throw "You must provide a valid numeric id";
    const postAndUser: IPostAndUser = {
      post: posts.find((post: IPost) => post.id === Number(id))!,
      user: users.find((user: IUser) => user.id === Number(id))!,
    } satisfies IPostAndUser;
    dispatch(setPostAndUserState(postAndUser));
    dispatch(fetchComments(Number(id)));
    dispatch(fetchPhotos(Number(id)));
  }, [dispatch, id, posts, users]);

  useEffect(() => {
    findCurrentPostAndAuthor();
    return () => {};
  }, [findCurrentPostAndAuthor]);
  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-100 p-4">
        <img
          src={photo?.url}
          alt={photo?.title}
          className="w-full h-auto"
        />
        {app.user && (
          <div className="mt-4">
            <p className="font-bold text-lg">Author: {app.user.name}</p>
            <p className="text-gray-600">Email: {app.user.email}</p>
          </div>
        )}
      </div>
      <div className="w-full md:w-3/4 bg-white p-4">
        {app.post && (
          <div className="mb-4">
            <h1 className="font-bold text-2xl">{app.post.title}</h1>
            <p className="text-gray-800">{app.post.body}</p>
          </div>
        )}
        <div className="mb-4">
          <h2 className="font-bold text-xl">Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-300 p-2">
              <p className="font-bold text-lg">{comment.name}</p>
              <p className="text-gray-600">{comment.email}</p>
              <p className="text-gray-800">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
