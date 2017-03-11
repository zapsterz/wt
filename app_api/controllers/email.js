

var sendJSONresponse = function(res, status, content){
	res.status(status);
	res.json(content);
};



'use strict';
const nodemailer = require('nodemailer');


module.exports.email = function(req,res){
	console.log(req.body.email, req.body.name, req.body.message);


	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: process.env.CP_EMAIL,
	        pass: process.env.CP_PASSWORD
	    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
	    from: process.env.CP_EMAIL, // sender address
	    to: ['clairepetley@gmail.com','waggytailsclubuk@gmail.com'], // list of receivers
	    subject: 'WAGGY TAILS EMAIL', // Subject line
	    text: "email: " +  req.body.email + "\n \n \n " + "Message \n \n " + req.body.message  + "\n \n name: " + req.body.name // plain text body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message was sent');
	    sendJSONresponse(res,202,info);

});
}


/*
module.exports.email = function(req, res){
	console.log("Email user");
			
	var helper = require('sendgrid').mail;
 
	from_email = new helper.Email("waggytailsclub@createdbyclaire.co.uk");
	to_email = new helper.Email("clairepetley@gmail.com");
	subject = "Sending with SendGrid is Fun";
	content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
	mail = new helper.Mail(from_email, subject, to_email, content);
	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
		  console.log(response.headers);
	});
	sendJSONresponse(res,200,"nope");

};
*/






