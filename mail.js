var path = require("path");
var Mailgun = require("mailgun-js");

var api_key = "key-5f3a9ddca7a8a78bcfcb9b9de35a3812";
var domain = "senati.edu.pe";

var mailgun = new Mailgun({
  apiKey: api_key,
  domain: "sandbox948ecf14a46c4b70a28f02022de3e096.mailgun.org"
});

var filepath = path.join(__dirname, "qrCodex.pdf");

var data = {
  from: "postmaster@senati.edu.pe",
  to: "jeysel.santiago@gmail.com",
  subject: "Testing PDF",
  text: "Testing PDF",
  attachment: filepath
};

mailgun
  .messages()
  .send(data)
  .then(body => console.log(body));
