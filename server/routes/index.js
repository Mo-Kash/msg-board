const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res)=>{
    console.log("Index Page");
    res.render("index", {title: "Mini Message Board", messages: messages});
});


router.get("/message/:id", (req, res)=>{
  const id = Number(req.params.id);
  console.log("Message "+id+" Opened");
  if (!Number.isInteger(id) || id < 0 || id >= messages.length) {
    return res.status(404).send('Message not found');
  }
  res.render("message", {
    title: 'Single message',
    message: messages[id],
  });
});

router.post("/new", (req, res)=>{
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    });
    console.log(messages);
    res.redirect("/")
});


module.exports = router;