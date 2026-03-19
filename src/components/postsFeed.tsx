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
  const [listOfPosts, setListOfPosts] = useState(false);

  useEffect(() => {
    get("/users/me/posts").then((res) => {
      if (res.status !== 200) {
        return console.log(res.message);
      }

      const list = res.resBody.posts.map((p: PostsStructure) => (
        <Posts
          title={p.title}
          body={p.message}
          published_time={p.published_time}
          key={p.id}
        />
      ));

      setListOfPosts(list);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      {isLoading && <h1>Hola</h1>}
      {listOfPosts}
    </section>
  );
}
