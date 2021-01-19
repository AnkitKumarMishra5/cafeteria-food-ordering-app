import passport from "passport";

import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { username, orgName, employeeID, email, mobile, idCard } = req.body;

  const newUser = new User({
    username,
    orgName,
    employeeID,
    email,
    mobile,
    idCard,
  });

  try {
    await User.register(
      newUser,
      req.body.password,
      function (err, createdUser) {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          passport.authenticate("local")(req, res, function () {
            res.status(201).json({ message: "OK" });
          });
        }
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
