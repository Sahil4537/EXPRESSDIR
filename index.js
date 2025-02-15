const express = require("express");
const app = express();

//console.dir(app);

let port = 3000;
app.listen (port , () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log("new incomming request");
//    let code = "<h1>Fruits</h1> <ul><li>Apple</li> <li>Banana</li></ul>";
//    res.send(code);
// });

app.get("/", (req, res) => {
    res.send('GET request to homepage');
  });

  app.get("/apple", (req, res) => {
    res.send('GET request to apple');
  });

  app.get("/banana", (req, res) => {
    res.send('GET request to banana');
  });