const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'quizly_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class User extends Sequelize.Model { }
class Score extends Sequelize.Model { }
class Trivia extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  admin: Sequelize.BOOLEAN
}, {
  sequelize,
  modelName: 'user'
})

Score.init({
  username: Sequelize.STRING,
  score: Sequelize.INTEGER
}, {
  sequelize,
  modelName: 'score'
});

Trivia.init({
  answer: Sequelize.STRING,
  option1: Sequelize.STRING,
  option2: Sequelize.STRING,
  option3: Sequelize.STRING,
  question: Sequelize.TEXT,
  value: Sequelize.INTEGER,
  category: Sequelize.STRING,
  approved: Sequelize.BOOLEAN
}, {
  sequelize,
  modelName: 'trivia'
});

User.hasMany(Score, { onDelete: 'cascade' });
Score.belongsTo(User);

module.exports = {
  User,
  Score,
  Trivia,
  sequelize
}