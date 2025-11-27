exports.registerUser = async (req, res) => {
  const db = req.app.locals.db;

  const user = req.body;
  await db.collection("users").insertOne(user);

  res.json({ message: "User registered" });
};

exports.loginUser = async (req, res) => {
  const db = req.app.locals.db;

  const { email, password } = req.body;
  const user = await db.collection("users").findOne({ email, password });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", user });
};