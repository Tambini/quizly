const { Router } = require('express');
const triviaRouter = Router();
const { Trivia } = require('../models');

//get all trivia index
triviaRouter.get('/', async (req, res) => {
  try {
    const trivia = await Trivia.findAll();
    res.json(trivia);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

//get trivia by category
triviaRouter.get('/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const trivia = await Trivia.findAll({
      where: {
        category
      }
    })
    res.json(trivia);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

//get trivia that are unapproved
triviaRouter.get('/', async (req, res) => {
  try {
    const trivia = await Trivia.findAll({
      where: {
        approved: false
      }
    })
    res.json(trivia);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

//frontend:
// const newQuestion = {
// answer: "answer",
// option1: "wrong answer1",
// option2: "wrong answer1",
// option3: "wrong answer1",
// question: "Question text",
// value: 500,
// category: "animals",
// approved: "false"
// }
// axios.post("http://localhost:3003/trivia, newQuestion);
//add new trivia
triviaRouter.post('/', async (req, res) => {
  try {
    const data = req.body;
    const trivia = await Trivia.create(data);
    res.json(trivia);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

//update trivia!
triviaRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await Trivia.update(data, {
      where: { id }
    })

    const trivia = await Trivia.findByPk(id);
    res.json(trivia);

  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

//axios.delete('localhost:3000/${trivia.id}')
//delete trivia
triviaRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const trivia = await Trivia.findByPk(id);
    await trivia.destroy();
    res.json({ trivia });
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
})

module.exports = triviaRouter;