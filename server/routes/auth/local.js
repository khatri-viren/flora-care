import { Router } from "express";
import passport from "passport";
import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Token missing" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
    if (err) {
      console.error("Token verification error:", err.message);
    } else {
      // console.log("Decoded token:", decodedToken);
      req.user = decodedToken;
      next();
    }
  });
};

router.post("/local/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (user === null) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        console.log("Token Payload:", { userId: user._id });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
          expiresIn: "12h",
        });

        res
          .status(200)
          .json({ message: "Successfully Authenticated", token, user });
        // console.log(req.user);
      });
    }
  })(req, res, next);
});

router.post("/local/register", async (req, res) => {
  User.findOne({ email: req.body.email }).then(
    async (doc) => {
      if (doc) res.send("User already Exists");
      else {
        console.log("fds");
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

router.get("/local/getuser", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Adjust accordingly based on your token structure
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
