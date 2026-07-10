import { useState, useEffect } from "react";
import { get } from "../../services/fetcher";
import { Posts } from "./postFormat";

interface PostsStructure {
  id: string;
  title: string;
  message: string;
  published_time: string;
}

export function PostsFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostsStructure[]>([]);

  useEffect(() => {
    get("/users/me/posts").then((res) => {
      if (res.status !== 200) {
        console.log(res.message);
        setIsLoading(false);
        return;
      }

      setPosts(res.resBody.posts ?? []);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="feed-state">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p className="feed-state">No posts yet. Create your first one.</p>;
  }

  return (
    <section className="posts">
      {posts.map((p) => (
        <Posts
          title={p.title}
          body={p.message}
          published_time={p.published_time}
          id={p.id}
          key={p.id}
        />
      ))}
    </section>
  );
}
