import { Users } from "../models/todolistModels.js";
import bcrypt from "bcrypt";

const getAllUsers = (req, res) => {
  Users.findAll()
    .then((users) => {
      res.json({ Users: users });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createUsers = async (req, res) => {
  const mail = req.body.email;
  const isUser = await Users.findOne({
    where: {
      email: mail,
    },
  });

  if (!isUser) {
    const nickName = req.body.nickname;
    const eMail = req.body.email;
    const passWord = req.body.password;

    if (nickName && eMail && passWord) {
      if (!regexNickname(nickName)) {
        res.json({ message: "the nickname entered is not correct" });
      } else if (!regexEmail(eMail)) {
        res.json({ message: "the email entered is not valid" });
      } else if (!regexPassword(passWord)) {
        res.json({
          message: "the password does not comply with our security policy",
        });
      } else {
        const salt = await bcrypt.genSalt(20);
        const hashedPassword = await bcrypt.hash(passWord, salt);

        const user = {
          nickname: nickName,

          email: eMail,

          password: hashedPassword,
        };

        Users.create(user)

          .then((result) => {
            res.json({ message: "User created", resultat: result });
          })

          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      res.json({ message: "Please fill in all fields" });
    }
  } else {
    res.json({ message: "Please verify your information!!" });
  }
};

function regexNickname(value) {
  const lastName = /^[a-zA-Zéèàëï_-]{3,15}$/;
  if (lastName.test(value)) {
    return true;
  } else {
    return false;
  }
}

function regexEmail(value) {
  const email = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (email.test(value)) {
    return true;
  } else {
    return false;
  }
}

function regexPassword(value) {
  const password =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+]).{8,}$/;
  if (password.test(value)) {
    return true;
  } else return false;
}

export { getAllUsers, createUsers };
