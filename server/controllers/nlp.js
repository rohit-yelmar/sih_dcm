import winkNLP from "wink-nlp";
// Load english language model — light version.
import model from "wink-eng-lite-web-model";

import { readPdfText } from "pdf-text-reader";

export const getNlp = async (req, res) => {
  const nlp = winkNLP(model);
  const its = nlp.its;
  // Obtain "as" reducer helper to reduce a collection.
  const as = nlp.as;
  //Pdf reader
  var pdfText = "";

  pdfText = await readPdfText({ url: "./data/court.pdf" });
  console.info(pdfText);
  var doc = nlp.readDoc(pdfText);

  const sentences = doc.sentences().out();

  const entities = doc.entities().out(its.detail);

  const tokens = doc.tokens().out();

  const tokenType = doc.tokens().out(its.type, as.freqTable);
  res.status(200).json({
    sentences: sentences,
    entities: entities,
    tokens: tokens,
    tokenType: tokenType,
    pdfText: pdfText,
  });
};
