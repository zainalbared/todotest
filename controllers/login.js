const Account = require("../models/account");

const Op = require("Sequelize").Op;

exports.login = async (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  await Account.findOne({
    where: { [Op.and]: [{ userName: userName }, { password: password }] },
  })
    .then((account) => {
      if (account != null) {
        req.session.accountId = account.id;

        res.status(200).send({ messge: "login is successful" });
      } else {
        res.status(200).send({ messge: "userName or Password Not Found" });
      }
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
};
