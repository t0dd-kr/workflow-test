const fs = require("fs");

fs.writeFileSync("hello.txt", Date.now().toString());
