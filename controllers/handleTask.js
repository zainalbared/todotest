const ToDo = require("../models/toDo");
const toDo = require("../models/toDo");

exports.addTask = async (req, res) => {
  const accountId = req.session.accountId;
  const nameTask = req.body.nameTask;
  const haderTask = req.body.haderTask;
  const bodyTask = req.body.bodyTask;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  if (!endDate || !startDate || !nameTask) {
    res.status(200).send({ message: "pleas compleat enter Data " });
  } else {
    ToDo.create({
      nameTask: nameTask,
      haderTask: haderTask,
      bodyTask: bodyTask,
      startDate: startDate,
      endDate: endDate,
      // supplement: supplement,
      AccountId: accountId,
    })
      .then((result) => {
        res.status(200).send({ message: "add successful", result: result });
      })

      .catch((err) => {
        console.log(err);
        res.status(400).send({ error: err });
      });
  }
};
exports.getOneTask = (req, res, next) => {
  const idToDo = req.body.idToDo;

  toDo
    .findByPk(idToDo, {
      attributes: [
        "id",
        "nameTask",
        "haderTask",
        "bodyTask",
        "startDate",
        "endDate",
      ],
    })
    .then((result) => {
      res.status(200).send({ message: "Get successful", result: result });
    })

    .catch((err) => res.status(400).send({ error: err }));
};

exports.updateTask = (req, res) => {
  console.log(req.body);
  const idToDo = req.body.idToDo;
  const nameTask = req.body.nameTask;
  const haderTask = req.body.haderTask;
  const bodyTask = req.body.bodyTask;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  if (!endDate || !startDate || !nameTask) {
    res.status(200).send({ message: "pleas compleat enter Data " });
  } else {
    toDo
      .findByPk(idToDo)

      .then((todo) => {
        todo.nameTask = nameTask;
        todo.haderTask = haderTask;
        todo.bodyTask = bodyTask;
        todo.startDate = startDate;
        todo.endDate = endDate;
        return todo.save();
      })
      .then((result) => {
        res.status(200).send({ message: "update successful", result: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({ error: err });
      });
  }
};

exports.deleteTask = (req, res, next) => {
  const idToDo = req.body.idToDo;
  console.log(idToDo);
  toDo
    .findByPk(idToDo)
    .then((toDO) => {
      return toDO.destroy();
    })
    .then((result) => {
      res.status(200).send({ message: "Delete successful", result: result });
    })

    .catch((err) => res.status(400).send({ error: err }));
};



exports.getAllTask = (req, res, next) => {
  const accountId = req.session.accountId;

  toDo
    .findAll({
      attributes: [
        "id",
        "nameTask",
        "haderTask",
        "bodyTask",
        "startDate",
        "endDate",
      ],
      where: {
        accountId: accountId,
      },
    })
    .then((result) => {
      res.status(200).send({ message: "Get successful", result: result });
    })

    .catch((err) => res.status(400).send({ error: err }));
};
