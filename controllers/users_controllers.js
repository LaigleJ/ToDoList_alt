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
  let data = req.body;

  const mail = data.email;
  const isUser = await Users.findAll({
    where: {
      email: mail,
    },
  });

  if (!isUser) {
    const nickName = data.nickname;
    const eMail = data.email;
    const passWord = data.password;

    if (nickName && eMail && passWord) {
      const salt = await bcrypt.genSalt(20);
      const hashedPassword = await bcrypt.hash(passWord, salt);

      const user = {
        nickname: nickName,
        email: eMail,
        password: hashedPassword,
      };
      Users.create(user)
        .then((result) => {
          res.json({ message: "user created", resultat: result });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};

export { getAllUsers, createUsers };
