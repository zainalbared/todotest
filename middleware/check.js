exports.checkUser = async (req, res, next) => {
  if (!req.session.accountId) {
    return res.status(404).send({ message: "user is not exist Pleass login" });
  } else {
    next();
  }
};
