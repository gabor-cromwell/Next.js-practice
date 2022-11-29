import { comments } from "../../../data/comments";

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.newComment;
    const newComment = {
      id: Date.now(),
      postId: 1,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
};

export default handler;
