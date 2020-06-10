const express = require('express');
const cors = require('cors');
const app = express ();
app.use(cors());

const PORT = 3001;

app.get('/', (req, res) =>{

    const{ tracking } = req.query;

    res.json({message: 'ok', tracking});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));