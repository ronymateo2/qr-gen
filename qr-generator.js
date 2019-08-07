const fs = require("fs");
const qrcode = require("qrcode");
var pdf = require("html-pdf");

run().catch(error => console.error(error.stack));

async function run() {
  const res = await qrcode.toDataURL(
    "CITA|200|DIA|6/8/2019|HORA-INI|10:00|HORA-FIN|12:00"
  );
  fs.writeFileSync(
    "./qr.html",
    `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
  <body>
    <div>
      <img src="${res}">
    </div>
    <div>
      <p>Puede imprimir o presentar este codigo en la puerta</p>
    </div>
  </body>
</html>

  `
  );
  var html = fs.readFileSync("./qr.html", "utf8");
  var options = {
    format: "Letter"
  };
  pdf.create(html, options).toFile("./qr.pdf", function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}
