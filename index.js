const { getTsconfig } = require("get-tsconfig")

console.log("JSConfig:", getTsconfig("./jsconfig.json"))
