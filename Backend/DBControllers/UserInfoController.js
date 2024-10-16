const express = require('express');
const router = express.Router();




// GET request to fetch all userinfo
router.get('', (req, res) => {
    const sql = 'SELECT * FROM userinfo';
    req.db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  });


  router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM userinfo WHERE ID = ?';
    req.db.query(sql,[userId] ,(err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      else if(results.length === 0){
        res.status(404).send('User not found');
      }
       else {
        res.json(results);
      }
    });
  });


  router.get('/health/:userId',(req,res) =>
    {
        const userId = req.params.userId;
        const sql = 'SELECT * FROM  userinfo RIGHT JOIN userhealth ON userinfo.ID = userhealth.ID WHERE userinfo.ID = ? ';
        req.db.query(sql,[userId],(err,results) =>{
          
          const responseObj =
          {
            hasAnyData : false,
            name : "",
            surname: "",
            disease: "",
          }
          if(err)
            {           
              res.status(500).send(err);
            }
            else if(results.length === 0)
              {
                responseObj.hasAnyData = false;
                res.json(responseObj);
              }

              else{      
                const userHealth = results[0];
                responseObj.name = userHealth.Name;
                responseObj.surname = userHealth.Surname;
                responseObj.disease = new Array(results.length).fill(null).map(() => ({name:"",date:""}));

                responseObj.hasAnyData=true;
                for (let i = 0; i < results.length; i++) {
                  responseObj.disease[i].name = results[i].Disease;
                  responseObj.disease[i].date = results[i].Date;            
                }
                
                res.json(responseObj);
              }
        })
    });



    router.get('/registry/:userId',(req,res) =>
      {
          const userId = req.params.userId;
          const sql = 'SELECT * FROM  userinfo RIGHT JOIN userregistry ON userinfo.ID = userregistry.ID WHERE userinfo.ID = ? ';
          req.db.query(sql,[userId],(err,results) =>{
            
            const responseObj =
            {
              hasAnyData : false,
              name : "",
              surname: "",
              crime: "",
            }
            if(err)
              {           
                res.status(500).send(err);
              }
              else if(results.length === 0)
                {
                  responseObj.hasAnyData = false;
                  res.json(responseObj);
                }
  
                else{      
                  const userRegistry = results[0];
                  responseObj.name = userRegistry.Name;
                  responseObj.surname = userRegistry.Surname;
                  responseObj.crime = new Array(results.length).fill(null).map(() => ({name:"",date:""}));
  
                  responseObj.hasAnyData=true;
                  for (let i = 0; i < results.length; i++) {
                    responseObj.crime[i].name = results[i].Crime;
                    responseObj.crime[i].date = results[i].Date;            
                  }
                  
                  res.json(responseObj);
                }
          })
      });
  

      router.get('/registry/:userId',(req,res) =>
        {
            const userId = req.params.userId;
            const sql = 'SELECT * FROM  userinfo RIGHT JOIN userregistry ON userinfo.ID = userregistry.ID WHERE userinfo.ID = ? ';
            req.db.query(sql,[userId],(err,results) =>{
              
              const responseObj =
              {
                hasAnyData : false,
                name : "",
                surname: "",
                crime: "",
              }
              if(err)
                {           
                  res.status(500).send(err);
                }
                else if(results.length === 0)
                  {
                    responseObj.hasAnyData = false;
                    res.json(responseObj);
                  }
    
                  else{      
                    const userRegistry = results[0];
                    responseObj.name = userRegistry.Name;
                    responseObj.surname = userRegistry.Surname;
                    responseObj.crime = new Array(results.length).fill(null).map(() => ({name:"",date:""}));
    
                    responseObj.hasAnyData=true;
                    for (let i = 0; i < results.length; i++) {
                      responseObj.crime[i].name = results[i].Crime;
                      responseObj.crime[i].date = results[i].Date;            
                    }
                    
                    res.json(responseObj);
                  }
            })
        });
    

        
      router.get('/school/:userId',(req,res) =>
        {
            const userId = req.params.userId;
            const sql = 'SELECT * FROM  userinfo RIGHT JOIN usereducationinfo ON userinfo.ID = usereducationinfo.ID WHERE userinfo.ID = ? ';
            req.db.query(sql,[userId],(err,results) =>{
              
              const responseObj =
              {
                hasAnyData : false,
                name : "",
                surname: "",
                SchoolName:"",
                EnterDate:"",
                ExitDate:"",
              }
              if(err)
                {           
                  res.status(500).send(err);
                }
                else if(results.length === 0)
                  {
                    responseObj.hasAnyData = false;
                    res.json(responseObj);
                  }
    
                  else{      
                    const userSchoolInfo = results[0];
                    responseObj.hasAnyData=true;

                    responseObj.name = userSchoolInfo.Name;
                    responseObj.surname = userSchoolInfo.Surname;
                    responseObj.SchoolName = userSchoolInfo.School;
                    responseObj.EnterDate = userSchoolInfo.EnterDate;
                    responseObj.ExitDate = userSchoolInfo.ExitDate;
                    
                    res.json(responseObj);
                  }
            })
        });

  
  module.exports = router;