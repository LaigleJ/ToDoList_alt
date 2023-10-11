import express from "express";
import sequelize from "./util/database.js";
import routerUsers from "./routes/users_routes.js";
import routerTasks from "./routes/tasks_routes.js";
import routerCategory from "./routes/category_routes.js";
import routerStatus from "./routes/status_routes.js";
import routerPriority from "/routes/priority_routes.js";
import 'dotenv/config';

async function main() {
  const app = express();
  const port = process.env.PORT;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World 2");
  });

  app.use("/", routerTasks);
  app.use("/", routerUsers);
  app.use("/", routerCategory);
  app.use("/", routerStatus);
  app.use("/", routerPriority);

  try {
    await sequelize.sync({ force: true });
    app.listen(port);
    console.log("🚀 ~ file: server.js:25 ~ main ~ port:", port);
  } catch (error) {
    console.log("🚀 ~ file: server.js:26 ~ main ~ error:", error);
  }
}
main();
