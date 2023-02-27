const router = require("express").Router();
const conversor = require("conversor-numero-a-letras-es-ar");
const Docxtemplater = require("docxtemplater");
const JSZip = require("jszip");
const dayjs = require("dayjs");
const fs = require("fs");
const PizZip = require("pizzip");
const path = require("path");

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const {
      propertyDetails,
      tenantsDetails,
      landlordsDetails,
      rentalConditions,
    } = req.body;

    let directory;
    if ((landlordsDetails.length === 1, tenantsDetails.length == 1)) {
      if (tenantsDetails[0].genre == "M" && landlordsDetails[0].genre === "M") {
        directory = "../../SingleFemaleTenant--FemaleLandlord.docx";
      } else if (
        tenantsDetails[0].genre == "M" &&
        landlordsDetails[0].genre === "H"
      ) {
        directory = "../../SingleFemaleTenant--MaleLandlord.docx";
      } else if (
        tenantsDetails[0].genre == "H" &&
        landlordsDetails[0].genre === "M"
      ) {
        directory = "../../SingleMaleTenant--FemaleLandlord.docx";
      } else {
        directory = "../../SingleMaleTenant--MaleLandlord.docx";
      }
    } else if ((landlordsDetails.length === 1, tenantsDetails.length == 2)) {
      if (landlordsDetails[0].genre === "M") {
        directory = "../../TwoTenants--FemaleLandlord.docx";
      } else if (landlordsDetails[0].genre === "H") {
        directory = "../../TwoTenants--MaleLandlord.docx";
      }
    }

    // Load the Word document template
    const content = fs.readFileSync(
      path.resolve(__dirname, directory),
      "binary"
    );

    // Create a new Docxtemplater instance
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // console.log(doc);

    // Convert numbers to spanish words
    let ClassConvertor = conversor.conversorNumerosALetras;
    let convertor = new ClassConvertor();

    var fecha = new Date(rentalConditions.startingDate);
    var options = { year: "numeric", month: "long", day: "numeric" };
    let spanishDate = fecha.toLocaleDateString("es-ES", options);
    // Define the data to be inserted into the document
    const data = {
      currentDate: spanishDate,
      landlord: `${landlordsDetails[0].title} ${landlordsDetails[0].fullName}`,
      documentType: landlordsDetails[0].documentType,
      documentNumber: landlordsDetails[0].documentNumber,
      tenantOne: `${tenantsDetails[0].title} ${tenantsDetails[0].firstNames} ${tenantsDetails[0].Surnames}`,
      DocumentTypeOne: tenantsDetails[0].documentType,
      DocumentNumberOne: tenantsDetails[0].documentNumber,
      tenantTwo: tenantsDetails[1]
        ? `${tenantsDetails[1].title} ${tenantsDetails[1].firstNames} ${tenantsDetails[1].Surnames}`
        : "",
      DocumentTypeTwo: tenantsDetails[1]?.documentType
        ? tenantsDetails[1]?.documentType
        : "",
      DocumentNumberTwo: tenantsDetails[1]
        ? tenantsDetails[1]?.documentNumber
        : "",
      locality: "Vera(pueblo)",
      propertyAddress: propertyDetails.address,
      propertyDescription: propertyDetails.description,
      amount: rentalConditions.amount,
      amountWords: convertor.convertToText(rentalConditions.amount),
      deposit: rentalConditions.deposit,
      depositWords: convertor.convertToText(rentalConditions.deposit),
      councilHouseReference: "010101010101",
      startingDate: spanishDate,
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
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
