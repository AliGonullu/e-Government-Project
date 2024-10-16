var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin123",
  password: "admin"
});



var sqlSelect = "SELECT * FROM edevlet.user"

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlSelect, function (err, result,fields) {
      if (err) throw err;
      console.log(result[0].TC);
    });
  });

function InsertUser(TC,Password)
{
    var sqlInsert = "INSERT INTO edevlet.user (ID,TC, Password) VALUES (UUID(),TC, Password)";
    con.query(sqlInsert,function(err,result,fields){
        if(err) throw err;
        console.log(result.affectedrows)
    })
};
