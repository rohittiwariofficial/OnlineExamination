var UserType = require("../models/UserType");

exports.add = function (req, res) {
  if (!req.body) {
    res.status(400).json({ error: "Params can not be empty!" });
    return;
  }

  let newUserType = new UserType(req.body);

  newUserType.save(newUserType)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({
        error:
          err.message || "Some error occurred while creating the UserType."
      });
    });
};

exports.view = function (req, res) {
  const id = req.params.id;

  UserType.findById(id)
    .then(data => {
      if (!data)
        res.status(404).json({ error: "Not found UserType with id " + id });
      else res.json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Error retrieving UserType with id=" + id });
    });
};

exports.update = function (req, res) {
    if (!req.body) {
        return res.status(400).json({
          error: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    UserType.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).json({
          error: `Cannot update UserType with id=${id}. Maybe UserType was not found!`
        });
      } else res.json({ message: "UserType was updated successfully." });
    })
    .catch(err => {
      res.status(500).json({
        error: "Error updating UserType with id=" + id
      });
    });
};

exports.delete = function (req, res) {
  const id = req.params.id;

  UserType.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).json({
          error: `Cannot delete UserType with id=${id}. Maybe UserType was not found!`
        });
      } else {
        res.json({
          message: "UserType was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not delete UserType with id=" + id
      });
    });
};

exports.userTypes = function (req, res) {
    UserType.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({
        error:
          err.message || "Some error occurred while retrieving UserType."
      });
    });
};
