import {PdfReader} from "pdfreader";

export const parsePdfController = async (req, res) => {
    console.log(req);
    const reader = new PdfReader();
    try {
        const pdfBuffer = req.files.pdf.data;
        let extractedText = "";
    
        reader.parseBuffer(pdfBuffer, (err, item) => {
          if (err) throw err;
          else if (!item) res.send(extractedText);
          else if (item.text) extractedText += item.text+ " ";
        });
      } catch (error) {
        res.status(500).send("Error processing PDF");
      }
}