const io = require("engine.io").listen(8080);

io.on("connection", s => {
    s.on("message", data => {
        s.send("receive:" + data);
    });
    s.on("disconnect", () => {
        console.log("disconnected");
    });
});
