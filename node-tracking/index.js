const express = require('express');
const cors = require('cors');
const TrackingCorreios = require('tracking-correios');
const app = express ();
app.use(cors());

const PORT = 3001;

app.get('/', (req, res) =>{

    const{ tracking } = req.query;

    TrackingCorreios.track(tracking)
        .then((result)=>{
            res.json({message: 'ok', tracking, result});
        })
        .catch((error)=>{
            res.json({message: 'error', error});
        });
OH910759118BR
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));