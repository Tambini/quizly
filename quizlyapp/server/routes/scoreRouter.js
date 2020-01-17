const { Router } = require('express');
const scoreRouter = Router();
const { Score } = require('../models');

//all scores
//all scores by user
//post score {name, score}


//index get all scores
scoreRouter.get('/', async (req, res) => {
  try {
    const scores = await Score.findAll();
    res.json(scores);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
});

//get all scores by name
scoreRouter.get('/:name', async (req, res) => {
  try {
    const username = req.params.name;
    const score = await Score.findAll({
      where: {
        username
      }
    })
    res.json({ score });
  } catch (e) {
    console.error(e.message);
    res.json(e.message);
  }
})

//add new score
scoreRouter.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newScore = await Score.create(data);
    res.json({ newScore });
  } catch (e) {
    console.error(e.message);
    res.json(e.message);
  }
})


module.exports = scoreRouter;