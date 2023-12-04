import User from "../models/user.js";
import bcrypt from "bcryptjs";
import localStrategy from "passport-local";

export default function passportConfig(passport) {
  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "This email is not registered",
            });
          }
          bcrypt.compare(password, user.password, (err, res) => {
            if (err) throw err;
            if (res) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong Password" });
            }
          });
        })
        .catch((err) => {
          throw err;
        });
    })
  );

  passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);

      if (!user) {
        console.error("User not found during deserialization");
        return done(null, false); // User not found
      }

      const userInfo = {
        email: user.email,
        // Add any other necessary fields here
      };

      done(null, userInfo);
    } catch (err) {
      console.error("Error during deserialization:", err);
      done(err, null);
    }
  });
}
