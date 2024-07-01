const express = require("express");
const app = express();
const path = require("path");
const { Server } = require("socket.io");

const http = require("http");
const server = http.createServer(app);
const io = new Server(server);


// Socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
}),

    // Serve static files from public folder
    app.get("/chat", (req, res) => {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    });

// Listen sever on PORT
server.listen(5000, () => {
    console.log("Server is running...");
});
