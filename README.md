# **QUIZLY**
Code Wizards
- By Sinara, Carolyn & Nolan
![](images/codeWizards.png)
### Overview

_**Quizly** is a trivia game site that allows users to be served a series of trivia questions one at a time, tallying up a score. Users will be able to register a username and password and login. There will be a section showing all-time high personal scores, and all-time high scores for all users. Users will be able to submit their own custom questions for administrator approval and eventually be added to the mix of questions. Users will be able to choose which category of questions they want to answer._

<br>
### Team Members

Created, designed, and developed by [Sinara Arliss](), [Nolan Giles](), and [Carolyn Tambini]() (Git Czar) for the General Assembly Software Engineering Immersive (November '19 Cohort (CHEETAHS)) Unit 3 Project. 

### Team Expectations

Team values and expectations can be found on our project's [Google document](https://docs.google.com/document/d/1HuQh1WgurZ3NwArKQuIuiLO4fWk-3NN5VMNvcH-lZiY/).


#### Wireframes

![homepage](images/homepage.jpeg)

![login register](images/Login_Register.jpeg)

![guest](images/guest.jpeg)

![game](images/game.jpeg)

_Sitemap_
![sitemap](images/componentERD.jpeg)



### MVP



_The **Quizly** MVP consists of user registration/login, playing a single game of random multiple-choice trivia and receiving a score based on incorrect/correct answers regardless if logged in or not.  If user is logged in they will have a score saved to the high score list._




#### Goals

- _User login/registration_
- _Set # of Quiz questions proposed and answered (the game part)_
- _Score saved on DB_

### Stretch Goals
- _Users can submit custom questions_
- _Custom questions can be submitted for Administrator approval before being added_
- _Players can choose which category of questions they want questions from_
- _Sound effects/music_
- _countdown timer & dynamic scoring_
- _user customized categories_
- _Viewing Score list different sorting_

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a declarative, efficient, and flexible JavaScript library for building user interfaces._ |
|   React Router   | _React Router is the standard routing library for React._ |
|     Express      | _Is a web application framework for Node.js, and is the de facto standard server framework for Node.js._ |
|  Express Router  | _Routing refers to how an application’s endpoints (URIs) respond to client requests._ |



<br>

### MVP Server (Back End)

- _Users table which contains username/password with proper bcrypt authentication as well as an admin flag_
- _Trivia table which contains all the trivia, answers, category and whether or not they need to be approved_
- _Score table which contains name and score_


#### ERD Model
![game](images/Trivia_tables.png)

#### Data Heirarchy

``` structure

database_db
|__ users/
|__ score/
|__ trivia/

```

<br>

***
#### Component Hierarchy

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Header.js
      |__ Footer.js
      |__ GameBoard.js
      |__ Login.js
      |__ Register.js
      |__ Question.js
      |__ GuestLanding.js
      |__ UserLanding.js
      |__ AdminLanding.js
      |__ ScoreList.js
|__ services/
      |__ api_helper.js
```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo._               |
|  Footer  | functional |   n   |   n   | _Our names &year_       |
|   GameBoard    |   class    |   y   |   n   | _Will render one question with answers at a time linked to category_      |
| LandingPage | functional |   n   |   y   | _Homepage where you can choose to play or login/register_                 |
| Login/Register | functional |   n   |   y   | _Form to login or register and a link to the other_                 |
|    ScoreList    | functional |   n   |   n   | _Where Highscore & if logged in personal scores are shown_ |



<br>

### Post-MVP

#### Post-MVP Goals

- _Users can submit custom questions_
- _Custom questions can be submitted for Administrator approval before being added_
- _Players can choose which category of questions they want questions from_
- _Sound effects/music_
- _countdown timer & dynamic scoring_
- _user customized categories_
- _Viewing Score list different sorting_

#### Post-MVP Data


<br>

***

<br>

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

| Error                                                   | Resolution                                             |
| :------------------------------------------------------ | :----------------------------------------------------- |
| `app.js:34 Uncaught SyntaxError: Unexpected identifier` | Missing comma after first object in sources {} object. |