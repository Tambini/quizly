const express = require('express');
const PORT = process.env.PORT || 3003;
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./routes/speakerRouter.js');
const scoreRouter = require('./routes/quoteRouter.js')
const triviaRouter = require('./routes/triviaRouter.js')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/score/', scoreRouter);
app.use('/trivia/', triviaRouter); // I added this just to test to see if it would work for /quotes/:id -- it does but not how Casey had it setup

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
