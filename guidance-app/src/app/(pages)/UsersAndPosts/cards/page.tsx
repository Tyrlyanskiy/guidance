import { getJsonObject } from "@/utils/getJsonObject";
import PostCard from "@/components/Card/PostCard";
import { User } from "@/types/User";
import { Post } from "@/types/Post";
import CommonCard from "@/components/Card/CommonCard";

// LSP
const UsersAndPostsCards = async () => {
  const postData: Post[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const userData: User[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <PostCard post={postData[0]} />

      {userData.map((user) => (
        <CommonCard
          key={user.id}
          renderHeader={() => user.name}
          renderBody={() => user.website}
        />
      ))}
    </div>
  );
};

export default UsersAndPostsCards;
