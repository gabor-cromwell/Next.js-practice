import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const loadComments = async () => {
    const response = await fetch("http://localhost:3005/api/comments");
    const data = await response.json();
    // console.log(data);
    setComments(data);
  };

  const saveComments = async () => {
    // console.log(newComment);
    const response = await fetch("http://localhost:3005/api/comments", {
      method: "POST",
      body: JSON.stringify({ newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadComments();
  };

  const deleteComment = async (id) => {
    // console.log(id);
    const response = await fetch(`http://localhost:3005/api/comments/${id}`, {
      method: "DELETE",
    });
    loadComments();
  };

  return (
    <div>
      <button onClick={loadComments}>Load Comments</button>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={saveComments}>Save Comment</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {comment.id} - {comment.body}
            </p>
            <button onClick={() => deleteComment(comment.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
