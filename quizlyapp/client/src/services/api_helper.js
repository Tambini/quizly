import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:3003"
  baseURL: "https://infinite-thicket-94229.herokuapp.com/"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/users/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/register', registerData);
  if (resp.data === "EXISTS") {
    return resp.data;
  } else {
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/users/verify')
    return resp.data;
  }
  return false;
}

//get list of admins
export const getAdmins = async () => {
  const admins = await api.get('/users/admins');
  return admins.data;
}

//get all users
export const getUsers = async () => {
  const users = await api.get('/users/all');
  return users.data;
}

//get all scores
export const getScores = async () => {
  const scores = await api.get('/score');
  return scores.data;
}

//get all scores from one person
export const getScoresByName = async (name) => {
  const scores = await api.get(`/score/${name}`);
  return scores.data;
}

//add a new score addNewScore({username: "nolan", score: 500});
export const addNewScore = async (score) => {
  const newScore = await api.post('/score', score);
  return newScore.data;
}

//get all trivia questions
export const getAllTrivia = async () => {
  const trivia = await api.get('/trivia');
  return trivia.data;
}

//get all trivia under one category, getTriviaByCategory("Around%20the%20World")
export const getTriviaByCategory = async (category) => {
  const trivia = await api.get(`/trivia/category/${category}`);
  return trivia.data;
}

//get all yet-to-be-approved-by-admin trivia questions
export const getUnapprovedTrivia = async () => {
  const trivia = await api.get('/trivia/unapproved');
  return trivia.data;
}

//create new trivia question, addNewTrivia({ answer: "paris", option1: "berlin", option2: "bordeaux", option3: "eiffel tower", question: "This is the capital of France", value: 200, category: "geography", approved: false})
export const addNewTrivia = async (newTrivia) => {
  const trivia = await api.post('/trivia', newTrivia);
  return trivia.data;
}

//update trivia, editTrivia(630, { answer: "paris", option1: "berlin", option2: "bordeaux", option3: "eiffel tower", question: "This is the capital of France", value: 200, category: "geography", approved: true})
export const editTrivia = async (id, editedTrivia) => {
  const trivia = await api.put(`/trivia/${id}`, editedTrivia);
  return trivia.data;
}

//delete trivia question, deleteTrivia(2002);
export const deleteTrivia = async (id) => {
  const trivia = await api.delete(`/trivia/${id}`);
  return trivia.data;
}

//get only the list of categories
export const getTriviaCategories = async () => {
  const categories = await api.get('/trivia/category');
  return categories.data;
}

//get all trivia over value 400
export const getDifficultTrivia = async () => {
  const trivia = await api.get('/trivia/difficult');
  return trivia.data;
}