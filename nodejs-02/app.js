express = require('express')
app = express()

//add public files
path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//front-end rendering 
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

//setting port for server
app.set('port', 1337)

metrics = require('./metrics.js');


app.get(
  '/hello',
  (req, res) => {
      process.stdout.write("Reached 'Hello' page\n");
      const name = req.query.name;
      res.status(200).render('hello.ejs', {name: req.query.name});
  }
);

app.get(
  '/',
  (req, res) => {
      res.status(200)
          .send('<p>Root page</p>');
      process.stdout.write("Root page reached\n");
  }
);

app.get('/metrics.js', (req, res) => {
  metrics.get((err, data) => {
      process.stdout.write("Metrics queried\n");
      if(err) throw err
      res.status(200).json(data)
  })
})

//listen on port
app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
);