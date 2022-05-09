const User = require("../models/user");
const Account = require("../models/account");

exports.addData = (req, res, next) => {
  try {
    require("../data/user.json")["user"].map((user) => {
      var newDataUser = {
        name: user.name,
      };
      User.create(newDataUser, {});
    });

    require("../data/account.json")["account"].map((account) => {
      console.log(account);
      var newDatAccount = {
        userName: account.userName,
        password: account.password,
        UserId: account.UserId,
      };
      Account.create(newDatAccount, {
        include: [User.hasOne(Account)],
      });
    });

    res.status(200).send({ message: "Add successful" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
