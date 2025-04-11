import { Post } from "@/types/Post";
import Card from "./CommonCard";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return <Card renderHeader={() => post.title} renderBody={() => post.body} />;
};

export default PostCard;
