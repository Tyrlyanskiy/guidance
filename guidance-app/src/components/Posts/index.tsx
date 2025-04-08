import { getJsonObject } from "@/utils/getJsonObject";

const Posts = async () => {
  const postData = await getJsonObject(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postData &&
          postData.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
