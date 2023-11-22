import { NewsCardProps } from "../interfaces/news.interfaces";

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {post.title}
        </h2>
        <p className="text-gray-700 mt-2">{post.body}</p>
      </div>
    </div>
  );
};

export default NewsCard;
