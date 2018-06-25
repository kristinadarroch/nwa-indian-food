const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000))
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index.ejs', {text: 'Hello World!'}))
  .listen(app.get('port'), () => {
    console.log('Node app running on port ', app.get('port'));
  });
