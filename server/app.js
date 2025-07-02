const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

app.use("/",indexRouter);
app.use("/new", newRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}.`);
})