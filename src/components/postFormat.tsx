interface PostsProps {
  title: string;
  body: string;
  published_time: string;
  id: string;
}

export function Posts({ title, body, published_time, id }: PostsProps) {
  const shortedDate = published_time.split("T");
  
  return (
    <div className="posts__item" id={id}>
      <div className="posts__header">
        <h3>{title}</h3>
        <p>{shortedDate[0]}</p>
      </div>

      <p className="posts__body">{body}</p>
    </div>
  );
}
