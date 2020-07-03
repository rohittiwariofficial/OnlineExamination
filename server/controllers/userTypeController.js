var UserType = require("../models/UserType");

exports.add = function (req, res) {
  if (!req.body) {
    res.status(400).json({ error: "Params can not be empty!" });
    return;
  }

  let newUserType = new UserType(req.body);

  newUserType.save(newUserType)
    .then(data => {
      res.status(200).json({
        code: 200,
        status:true,
        message: 'Add user type successfully!',
        error: [],
        data:[]
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        status:false,
        message: 'Some error occurred while creating the UserType.',
        error: [
          err.message || "Some error occurred while creating the UserType."
        ],
        data:[]
      });
    });
};

exports.view = function (req, res) {
  const id = req.params.id;
  UserType.findById(id)
    .then(data => {
      if (!data)
        res.status(404).json({
          code: 404,
          status:false,
          message: "Not found User Type",
          error: [
            err.message || "Error retrieving User Type"
          ],
          data:[]
        });
      else res.status(200).json({
        code: 200,
        status:true,
        message: "User Type Retrieved",
        error: [],
        data:data
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        status:false,
        message: 'Retrieving User Type Failed!',
        error: [
          err.message || "Error retrieving User Type"
        ],
        data:[]
      });
    });
};

exports.update = function (req, res) {
    if (!req.body) {
      return res.status(500).json({
        code: 500,
        status:false,
        message: "Data to update can not be empty!",
        error: [
          "Data to update can not be empty!"
        ],
        data:[]
      });
    }

    const id = req.params.id;
    UserType.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).json({
          code: 404,
          status:false,
          message: "Cannot update UserType. Maybe User Type was not found!",
          error: [
            err.message || "Cannot update UserType. Maybe User Type was not found!"
          ],
          data:[]
        });
      } 
      else res.status(200).json({
        code: 200,
        status:true,
        message: "UserType updated successfully.",
        error: [],
        data:data
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        status:false,
        message: "Error updating UserType!",
        error: [
          err.message || "Error updating UserType"
        ],
        data:[]
      });
    });
};

exports.delete = function (req, res) {
  const id = req.params.id;

  UserType.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).json({
          code: 404,
          status:false,
          message: "Cannot delete User Type. Maybe User Type was not found!",
          error: [
            err.message || "Cannot delete User Type. Maybe User Type was not found!"
          ],
          data:[]
        });
      } else {
        res.status(200).json({
          code: 200,
          status:true,
          message: "User Type was deleted successfully!",
          error: [],
          data:data
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        status:false,
        message: "Could not delete User Type",
        error: [
          err.message || "Could not delete User Type"
        ],
        data:[]
      });
    });
};

exports.userTypes = function (req, res) {
    UserType.find({})
    .then(data => {
      res.status(200).json({
        code: 200,
        status:true,
        message: "User Type list loaded successfully!",
        error: [],
        data:data
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 500,
        status:false,
        message: "Some error occurred while retrieving UserType.",
        error: [
          err.message || "Some error occurred while retrieving UserType."
        ],
        data:[]
      });
    });
};
