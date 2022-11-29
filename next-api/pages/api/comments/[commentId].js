import { comments } from "../../../data/comments";

const handler = (req, res) => {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === Number(commentId)
    );
    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    const deleteComment = comments.find(
      (comment) => comment.id === Number(commentId)
    );
    const index = comments.findIndex(
      (comment) => comment.id === Number(commentId)
    );

    comments.splice(index, 1);
    res.status(200).json({ deleteComment });
  }
};

export default handler;
