const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {});

app.post('/', (req, res) => {});

app.listen(4000, () => {
  console.log('Posts services is listening on port 4000');
});
