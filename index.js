const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000))
  .use(express.static(__dirname + '/assets'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index.ejs'))
  .listen(app.get('port'), () => {
    console.log('Node app running on port ', app.get('port'));
  });
