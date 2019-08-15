var PdfPrinter = require("pdfmake/src/printer");
var fs = require("fs");
var fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf"
  }
};
var printer = new PdfPrinter(fonts);

var docDefinition = {
  content: [
    {
      qr: "CITA|200|DIA|6/8/2019|HORA-INI|10:00|HORA-FIN|12:00",
      fit: "250",
      alignment: "center"
    },
    {
      text: "\n"
    },
    {
      text: "Puede imprimir o presentar este codigo en la puerta",
      alignment: "center"
    }
  ]
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.on("end", function() {
  console.log("end");
});
pdfDoc.pipe(fs.createWriteStream("./qrCodex.pdf"));
pdfDoc.end();
