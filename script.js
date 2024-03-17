const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let categories = ['funnyJoke', 'lameJoke'];

let funnyJoke = [
    {
        'joke': 'Why did the student eat his homework?',
        'response': 'Because the teacher told him it was a piece of cake!'
    },
    {
        'joke': 'What kind of tree fits in your hand?',
        'response': 'A palm tree'
    },
    {
        'joke': 'What is worse than raining cats and dogs?',
        'response': 'Hailing taxis'
    }
];

let lameJoke = [
    {
        'joke': 'Which bear is the most condescending?',
        'response': 'Pan-DUH'
    },
    {
        'joke': 'What would the Terminator be called in his retirement?',
        'response': 'The Exterminator'
    }
];

app.get('/jokebook/categories', (req, res) => {
    res.json(categories);
});

app.get('/jokebook/joke/:category', (req, res) => {
    const category = req.params.category;
    const limit = req.query.limit;

    let jokes;
    switch (category) {
        case 'funnyJoke':
            jokes = funnyJoke;
            break;
        case 'lameJoke':
            jokes = lameJoke;
            break;
        default:
            return res.status(400).json({ 'error': `no category listed for ${category}` });
    }

    if (limit) {
        jokes = jokes.slice(0, limit);
    }

    res.json(jokes);
});

app.post('/jokebook/joke/new', (req, res) => {
    const { category, joke, response } = req.body;

    if (!category || !joke || !response || !categories.includes(category)) {
        return res.status(400).json({ 'error': 'invalid or insufficient user input' });
    }

    const newJoke = { joke, response };
    switch (category) {
        case 'funnyJoke':
            funnyJoke.push(newJoke);
            break;
        case 'lameJoke':
            lameJoke.push(newJoke);
            break;
    }

    res.json({ 'message': 'Joke added successfully', 'jokes': category === 'funnyJoke' ? funnyJoke : lameJoke });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
