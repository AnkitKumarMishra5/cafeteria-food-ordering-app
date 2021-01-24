import passport from "passport";
import express from "express";

import { getUsers, createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
      regId: req.user.regId,
      username: req.user.username,
      orgName: req.user.orgName,
      employeeId: req.user.employeeId,
      email: req.user.email,
      mobile: req.user.mobile,
      joinedOn: req.user.createdAt
  })
});

router.get("/logout", (req,res) => {
  req.logout();
})

export default router;
