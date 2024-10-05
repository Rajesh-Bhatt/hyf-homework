import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

//Support parsing JSON requests
app.use(express.json());

let documents;
try {
  const data = fs.readFileSync("documents.json");
  documents = JSON.parse(data);
} catch (error) {
  console.error("Error reading documents.json:", error);
  documents = [];
}

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//Get /search
app.get("/search", (req, res) => {
  const query = req.query.q;

  //If no query parameter is provided, return all documents
  if (!query) {
    return res.json(documents);
  }

  //Filter documents based on query parameter q
  const result = documents.filter((doc) =>
    Object.values(doc).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    )
  );

  res.json(result);
});

//GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).send("Document not found");
  }
  res.json(document);
});

//POST /Search
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  //If both query and fields are provided, return 400 Bad Request
  if (query && fields) {
    return res
      .status(400)
      .send(
        "Can not use both 'q' query parameter and 'fields' in request body"
      );
  }
  let result = documents;

  //If query is provided, filter documents based on query parameter q
  if (query) {
    result = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  //If fields are provided, filter documents based on fields in request body
  if (fields) {
    result = documents.filter((doc) =>
      Object.keys(fields).every(
        (key) =>
          String(doc[key]).toLowerCase() ===
          String(fields[key]).toLocaleLowerCase()
      )
    );
  }
  res.json(result);
});

//Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
