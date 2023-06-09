const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from participants where id = 1", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

app.post("/", (req, resp) => {
    // const data = {name:"nikhilk"};

    const data = req.body;
    con.query('Insert into test SET ? ', data, (err, result,feilds) => {
      if (err) { resp.send("error in api") }
      else { resp.send(result) }
    })
  });

app.listen("5000")