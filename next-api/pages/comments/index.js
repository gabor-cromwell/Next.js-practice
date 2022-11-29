import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState("");

  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();
    console.log(data);
    setComments(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Comments</button>
      {comments &&
        comments.map((comment) => {
          return (
            <p key={comment.id}>
              {comment.id} - {comment.body}
            </p>
          );
        })}
    </div>
  );
};

export default Comments;
