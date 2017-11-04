const io = require("socket.io")(8080);

io.on("connection", s => {
    s.on("message", data => {
        console.log(data);
        s.emit("reply", "?" + data);
    });
    s.on("disconnect", () => {
        console.log("disconnected");
    });
});
