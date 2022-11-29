import { comments } from "../../../data/comments";

const handler = (req, res) => {
  res.status(200).json(comments);
};

export default handler;
