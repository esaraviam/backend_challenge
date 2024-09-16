
import cors from 'cors';
import express from 'express';


const port = 3000;
const app = express();

app.use(cors())

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})