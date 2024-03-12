const express = require('express')
const router = express.Router();

// router.use((req, res, next)=> {
    
// })

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });

  app.get('/username/:username', (req, res) => {
    let response;
    try {
      let user = req.users.filter((user)=> user.username === req.params.username);
      if(user.length === 0) {
        res.send({error: 'user not found'})
      } else {
        res.send(user);
      }
    } catch(err) {
      console.log("error", err);
      res.send({error: err})
    }
  });
  

module.exports = router