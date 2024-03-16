export default async (req, res) => {
  let { email, name, password } = req.body;
  res.json({ status: true });
};
