import "dotenv/config";
import Server from "./src/server/models/server";

function main() {
  const app = new Server();
  app.listen();
}

main();
