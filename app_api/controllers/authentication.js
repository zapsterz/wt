var passport = require('passport');
var mongoose = require('mongoose');
var UDB = mongoose.model('users');

var sendJSONresponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

module.exports.register = function(req, res){
	console.log("Registering a new user");
	
	console.log(req.body.name + " - " + req.body.email +" - " + req.body.password);
	if(!req.body.name || !req.body.email || !req.body.password) {
		sendJSONresponse(res, 400, {
			"message": "All fields required"
		});
		return;
	}

	var user = new UDB();
	user.name = req.body.name;
	user.email = req.body.email;
	user.setPassword(req.body.password);

	user.type="0";

	console.log(user);
	user.save(function(err){
		var token;
		if (err){
			console.log(err);
			sendJSONresponse(res, 404, err);
		} else {
			token = user.generateJwt();
			sendJSONresponse(res, 200, {
				"token": token
			});
		}
	});
};




module.exports.login = function(req, res) {
  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info){
    var token;

    if (err) {
      sendJSONresponse(res, 404, err);
      return;
    }

    if(user){
      token = user.generateJwt();
      console.log("Jwt generated");
      console.log(token);
      sendJSONresponse(res, 200, {
        "token" : token
      });
    } else {
      sendJSONresponse(res, 401, info);
    }
  })(req, res);

};




