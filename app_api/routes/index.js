var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});
//console.log("AUTH-----------", auth);


//var ctrlPlans = require('../controllers/users');
//var ctrlQuizzes = require('../controllers/quizzes');
var ctrlAuth = require('../controllers/authentication');
var ctrlEmail = require('../controllers/email');
//var ctrlAdmin = require('../controllers/admin');

//create a user
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/email', ctrlEmail.email);


//get all quizzes user has done, or has to do
//router.get('/usersquizzes', auth, ctrlQuizzes.showallquizzes);


//create a new quiz
//router.get('/submit', auth, ctrlAdmin.getadminquizzes);

//router.post('/submit', auth, ctrlAdmin.createaquiz);

//router.put('/submit/:quiz_id/:question_id', auth, ctrlAdmin.update_quiz);



//get a quiz
//router.get('/quizzes/:quiz_id', auth, ctrlQuizzes.getaquiz);

//get results for taken quiz - if taken already
//router.get('/quizzes/:quiz_id/results', auth, ctrlQuizzes.getuserresults);
//post a new quiz
//router.post('/quizzes/:quiz_id', auth, ctrlQuizzes.submitaquiz);
//user delete a quiz (submit null responses)
//router.delete('/quizzes/:quiz_id', auth, ctrlQuizzes.deleteaquiz);


//show quiz results from group that took it
//router.get('/results/:quiz_id', auth, ctrlAdmin.quizresults);
//delete a quiz
//router.delete('/results/:quiz_id', auth, ctrlAdmin.deleteaquiz);


//show all groups created by the admin
//router.get('/admingroups', auth, ctrlAdmin.viewalladmingroups);
//create a new group
//router.post('/admingroups', auth, ctrlAdmin.creategroup);


//show all groups user belongs to
//router.get('/groups', auth, ctrlAdmin.viewallgroups);

//get data for one user from user id
//router.post('/user', auth, ctrlAdmin.getoneuser);


//show all member in group (admin)
//router.get('/groups/:group_id', auth, ctrlAdmin.groupmembers);
//apply to join group (user)
//router.post('/groups/:group_id', auth, ctrlAdmin.joingrouprequest);
//approve or reject user to join group
//router.put('/groups/:group_id/:user_id', auth, ctrlAdmin.allowuser);


//set a quiz for a set group of people
//router.post('/setaquiz', auth, ctrlAdmin.setaquiz);
//router.delete('/setaquiz', auth, ctrlAdmin.closeaquiz);




module.exports = router;
