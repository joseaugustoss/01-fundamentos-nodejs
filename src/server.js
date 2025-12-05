import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: Date.now(),
      name: "José Augusto",
      email: "joseaugusto0408@gmail.com",
    });
    return res.end(`Criação de usuário`);
  }
  return res.end("Hello World - Rocketseat!!");
});

server.listen(3333);
