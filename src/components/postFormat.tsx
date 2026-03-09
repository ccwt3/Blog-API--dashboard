interface PostsProps {
  title: string;
  body: string;
  published_time: string;
}

export function Posts({ title, body, published_time }: PostsProps) {
  return (
    <div className="posts__item">
      <div className="posts__header">
        <h3>{title}</h3>
        <p>{published_time}</p>
      </div>

      <p className="posts__body">{body}</p>
    </div>
  );
}
