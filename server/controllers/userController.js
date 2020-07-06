var User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.add = function (req, res) {
  let newUser = new User(req.body);
  newUser.status = 'ACTIVE';
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(newUser.password, salt);
  newUser.password = hash;

  newUser
    .save(newUser)
    .then((data) => {
      res.status(200).json({
        code: 200,
        status: true,
        message: "Add user successfully!",
        error: [],
        data: [data],
      });
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        status: false,
        message: "Some error occurred while creating the User.",
        error: [err.message || "Some error occurred while creating the User."],
        data: [],
      });
    });
};

exports.view = function (req, res) {
  const id = req.params.id;
  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).json({
          code: 404,
          status: false,
          message: "Not found User",
          error: [err.message || "Error retrieving User"],
          data: [],
        });
      else
        res.status(200).json({
          code: 200,
          status: true,
          message: "User Retrieved",
          error: [],
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        status: false,
        message: "Retrieving User Failed!",
        error: [err.message || "Error retrieving User"],
        data: [],
      });
    });
};

exports.update = function (req, res) {
  if (!req.body) {
    return res.status(500).json({
      code: 500,
      status: false,
      message: "Data to update can not be empty!",
      error: ["Data to update can not be empty!"],
      data: [],
    });
  }

  const _id = req.params.id;
  User.findOneAndUpdate({_id:_id}, req.body, { 
      useFindAndModify: false, 
      new: true, upsert: 
      false, 
      rawResult: false 
    })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          code: 404,
          status: false,
          message: "Cannot update User. Maybe User was not found!",
          error: [
            err.message || "Cannot update User. Maybe User was not found!",
          ],
          data: [],
        });
      } else
        res.status(200).json({
          code: 200,
          status: true,
          message: "User updated successfully.",
          error: [],
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        status: false,
        message: "Error updating User!",
        error: [err.message || "Error updating User"],
        data: [],
      });
    });
};

exports.delete = function (req, res) {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          code: 404,
          status: false,
          message: "Cannot delete User. Maybe User was not found!",
          error: [
            err.message || "Cannot delete User. Maybe User was not found!",
          ],
          data: [],
        });
      } else {
        res.status(200).json({
          code: 200,
          status: true,
          message: "User was deleted successfully!",
          error: [],
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        status: false,
        message: "Could not delete User",
        error: [err.message || "Could not delete User"],
        data: [],
      });
    });
};

exports.users = function (req, res) {
  User.find({})
    .then((data) => {
      res.status(200).json({
        code: 200,
        status: true,
        message: "User list loaded successfully!",
        error: [],
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        code: 500,
        status: false,
        message: "Some error occurred while retrieving User.",
        error: [err.message || "Some error occurred while retrieving User."],
        data: [],
      });
    });
};
