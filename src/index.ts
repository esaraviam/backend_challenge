
import cors from 'cors';
import express from 'express';


const port = 3000;
const app = express();

app.use(cors())

app.use(express.json());


app.get("/products" , (req, res) => {
  res.status(200).send("Hello World!");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})