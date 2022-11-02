const router = require("express").Router();
const users = [
  {
    _id: "gftujkiuyg678",
    name: "Ian",
  },
  {
    _id: "jmksjjsjs",
    name: "Amos",
  },
];

router.get("/users", (req, res) => {
  res.status(200).json(users);
});

router.post("/users", async (req, res) => {
  try {
    const user = await req.body;
    users.push(user);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }

  //   res.status(200).json(user);
});

module.exports = router;
