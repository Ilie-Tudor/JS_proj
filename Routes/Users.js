const express = require("express");
const { User } = require("../models");

router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.send(user);
})

router.get("/name/:name", async (req, res) => {
  const user = await User.findOne({where: { user_name: req.params.name}});
  res.send(user);
})

router.post("/create", async (req, res) => {
  User.create({ 
    user_name: req.body.user_name, 
    email: req.body.email,
    password: req.body.password,
    display_name: req.body.display_name,
    address: req.body.address,
    postal_code: req.body.postal_code
  }).then(() => {
      res.send("User has been created!");
  }).catch((err) => {
      res.send("Eroare: Introduceti datele corect!");
  });
})

router.put("/update/:id", async(req,res) => {
  User.update(
  {
    user_name: req.body.user_name, 
    email: req.body.email,
    password: req.body.password,
    display_name: req.body.display_name,
    address: req.body.address,
    postal_code: req.body.postal_code
  }, 
  {
    where: {
      user_id: req.params.id
    }
  }
   ).then(() => {
    res.send("User has been updated yuhuuuuu")
  }).catch( (err) => {
    res.send("Eroare, verifica daca tot ce ai modificat e ocei");
  })
})


router.delete("/delete/:id", async(req, res) => {
  User.destroy({
    where: {
      user_id: req.params.id
    }
  }).then( () => {
    res.send("Userul a fost sters");
  }).catch( (err) => {
    res.send("Eroare ");
  })
})
module.exports = router;
