const express = require('express');
const router = express.Router();



// GET request to fetch all users
router.get('', (req, res) => {
  const sql = 'SELECT * FROM user';
  req.db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});


router.post("/edevlet", (req, res) => {
  const sql = "SELECT * FROM user WHERE TC = ? AND password = ?";  // Corrected
  req.db.query(sql, [req.body.TC, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }

    if (data.length > 0) {
      console.log(data[0].ID);
      return res.json(data);
    } 

    else {
      return res.json("Failed");
    }
  });
});


module.exports = router;

