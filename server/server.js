const express = require("express");
const conversor = require("conversor-numero-a-letras-es-ar");
const Docxtemplater = require("docxtemplater");
const JSZip = require("jszip");
const dayjs = require("dayjs");
const fs = require("fs");
const PizZip = require("pizzip");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/create-document", (req, res) => {
  // Load the Word document template
  const content = fs.readFileSync(
    path.resolve(__dirname, "dummyContract.docx"),
    "binary"
  );

  // Create a new Docxtemplater instance
  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Convert numbers to spanish words
  let ClassConvertor = conversor.conversorNumerosALetras;
  let convertor = new ClassConvertor();

  var fecha = new Date(dayjs().format("YYYY-MM-DD"));
  var options = { year: "numeric", month: "long", day: "numeric" };

  console.log(fecha);

  // Define the data to be inserted into the document
  const data = {
    currentDate: fecha.toLocaleDateString("es-ES", options),
    landlord: "Don John Doe",
    documentType: "DNI",
    documentNumber: "77771777F",
    tenantOne: "Don Jose Perez",
    DocumentTypeOne: "DNI",
    DocumentNumberOne: "7333377F",
    tenantTwo: "Doña Juana Perez",
    DocumentTypeTwo: "DNI",
    locality: "Vera(pueblo)",
    DocumentNumberTwo: "3233377F",
    propertyAddress: "this is a fake address",
    propertyDescription: "this is a fake description",
    amount: "500",
    amountWords: convertor.convertToText(500),
    deposit: "500",
    councilHouseReference: "010101010101",
    depositWords: convertor.convertToText(516),
    startingDate: fecha.toLocaleDateString("es-ES", options),
  };

  // Render the document with the new data
  doc.render(data);

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });
  // Write the updated document to a new file
  fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
  res.send("Hello World!");
});

app.listen(PORT, () => console.log("Now listening"));
