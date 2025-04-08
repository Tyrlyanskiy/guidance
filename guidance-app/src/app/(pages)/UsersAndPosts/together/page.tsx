import { getJsonObject } from "@/utils/getJsonObject";
import { User } from "@/types/User";
import { Post } from "@/types/Post";

// Single Responsibility Principle
const UsersAndPosts = async () => {
  const postData: Post[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const userData: User[] = await getJsonObject(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {userData && userData.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <h2>Posts</h2>
      <ul>
        {postData &&
          postData.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default UsersAndPosts;
