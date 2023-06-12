import "dotenv/config";
import Server from "./src/server/server";

function main() {
  const app = new Server();
  app.listen();
}

main();
