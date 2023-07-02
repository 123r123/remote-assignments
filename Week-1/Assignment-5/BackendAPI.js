const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    //console.dir(req);
    const number = req.query.number;

    if (!number) {
      return res.send('<h1>Lack of Parameter</h1>');
    }

    if (isNaN(number)) {
      return res.send('<h1>Wrong Parameter</h1>');
    }

    const n = parseInt(number);
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }
    res.send(`<h1>The sum of numbers from 1 to ${n} is ${sum}</h1>`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
