import express from 'express';
import { parsePdfController } from '../controller/pdfParseController.js';


const route = express.Router();

route.route("/parsePDF").post(parsePdfController);

export default route;
