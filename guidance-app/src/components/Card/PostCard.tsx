import { Post } from "@/types/Post";
import CommonCard from "./CommonCard";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <CommonCard renderHeader={() => post.title} renderBody={() => post.body} />
  );
};

export default PostCard;
