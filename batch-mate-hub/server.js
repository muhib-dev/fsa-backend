const dotenv = require("dotenv");
const app = require("./app/app");
const http = require("http");

dotenv.config("./.env");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`server listening on PORT: ${PORT}`));
