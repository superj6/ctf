var express = require('express');
var { spawnSync } = require('child_process');
var app = express();

const PORT = process.env.PORT || 1337;

let pwning = false;

app.get("/bot", async (req, res) => {
  const url = req.query.target;

  if (typeof url != "string" || !url.startsWith("http://")) {
    return res.end("bad");
  }

  if (pwning) {
    return res.end("come back later");
  }
  pwning = true;
  console.log("pwning ", url);
  const output = spawnSync(__dirname + "/../run.sh", [url], {
    env: {},
    timeout: 3 * 1000,
    cwd: "/"
  });
  pwning = false;

  res.end("done");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, '0.0.0.0', () => {
  console.log("listening ", PORT)
});
