const { ObjectId } = require("mongodb");

exports.createPost = async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("posts").insertOne(req.body);
  res.json({ message: "Post created" });
};

exports.getPosts = async (req, res) => {
  const db = req.app.locals.db;
  const posts = await db.collection("posts").find().toArray();
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("posts").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json({ message: "Post updated" });
};

exports.deletePost = async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("posts").deleteOne({
    _id: new ObjectId(req.params.id)
  });
  res.json({ message: "Post deleted" });
};