import { server } from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
