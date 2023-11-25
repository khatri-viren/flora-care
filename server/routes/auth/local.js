import { Router } from "express";
import passport from "passport";
import User from "../../models/user.js";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/local/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (user === null) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.post("/local/register", async (req, res) => {
  User.findOne({ email: req.body.email }).then(
    async (doc) => {
      if (doc) res.send("User already Exists");
      else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    },
    (err) => {
      throw err;
    }
  );
  console.log(req.body);
});

router.get("/local/getuser", async (req, res) => {});

export default router;
