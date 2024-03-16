const protectApi = (req, res, next) => {
  let authorization = req.header("Authorization");
  if (authorization) {
    // verify
    console.log(authorization);
    return next();
  }

  return res.status(403).json({ message: "Unauthorized access" });
};

export default protectApi;
