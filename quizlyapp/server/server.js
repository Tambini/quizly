const express = require('express');
const PORT = process.env.PORT || 3003;
const cors = require('cors');
const bodyParser = require('body-parser');

//import route from speakerRouter
const speakerRouter = require('./routes/speakerRouter.js');
//import route from quoteRouter
const quoteRouter = require('./routes/quoteRouter.js')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', speakerRouter);
app.use('/speakers/:speakerId/quotes', quoteRouter);
app.use('/quotes/', quoteRouter); // I added this just to test to see if it would work for /quotes/:id -- it does but not how Casey had it setup

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
