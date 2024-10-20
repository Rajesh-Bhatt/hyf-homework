import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

// contactsAPIRouter.get("/", async (req, res) => {
//   let query = knexInstance.select("*").from("contacts");

//   if ("sort" in req.query) {
//     const orderBy = req.query.sort.toString();
//     if (orderBy.length > 0) {
//       query = query.orderByRaw(orderBy);
//     }
//   }

//   console.log("SQL", query.toSQL().sql);

//   try {
//     const data = await query;
//     res.json({ data });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance("contacts");

  // Define valid sorting fields and order
  const validSortFields = ["first_name", "last_name", "email", "phone"];
  const validSortOrder = ["ASC", "DESC"];

  // Check for sorting in query parameters
  if ("sort" in req.query) {
    const [sortField, sortOrder = "ASC"] = req.query.sort.split(" ");
    if (
      !validSortFields.includes(sortField.toLowerCase()) ||
      !validSortOrder.includes(sortOrder.toUpperCase())
    ) {
      return res.status(400).json({ message: "Invalid sort parameter" });
    }
    query = query.orderBy(sortField, sortOrder.toUpperCase());
  }

  // Log the SQL query before execution
  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    return res.json({ data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//Sorts contacts by first name, ascending: /api/contacts?sort=first_name%20ASC

//Sorts contacts by last name, descending: /api/contacts?sort=last_name%20DESC

//SQL injection vulnerability query: http://localhost:3000/api/contacts?sort=first_name%20DESC; DROP TABLE contacts;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
