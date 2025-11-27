const { ObjectId } = require("mongodb");

exports.createClaim = async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("claims").insertOne(req.body);
  res.json({ message: "Claim submitted" });
};

exports.getClaims = async (req, res) => {
  const db = req.app.locals.db;
  const claims = await db.collection("claims").find().toArray();
  res.json(claims);
};

exports.updateClaim = async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("claims").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json({ message: "Claim status updated" });
};
