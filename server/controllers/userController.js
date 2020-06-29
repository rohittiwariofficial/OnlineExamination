var User = require("../models/User");

exports.registerUser = function (req, res) {
  //@TODO : Get req according to interface and then pass it to new User();
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.getUsers = function (req, res) {
  let events = [
    {
      _id: "1",
      name: "OOPS",
      description: "Runtime Polymorphism",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "DotNet Core",
      description: "Request Pipe Line",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Design Pattern",
      description: "Adapter Pattern",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "MVC",
      description: "Request Pipe Line",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "C#",
      description: "Task Parallel Library",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Angular",
      description: "Component Life Cycle",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.status(200).json(events);
};
