const express = require('express');
const app = express();
const PORT = 3000;

const charactersArray = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'https://starwarsblog.starwars.com/wp-content/uploads/2015/11/yoda-the-empire-strikes-back-1536x864-349144518002.jpg',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Knight',
        forcePoints: 30000,
        age: 23,
        avatar: 'https://i.pinimg.com/originals/f5/1c/54/f51c543269e3e87ae6753e8c1530e653.jpg',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Darth Sidious',
        role: 'Sith Master',
        forcePoints: 100000,
        age: 88,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png',
        routeName: 'darthsidious'
    },
    {
        name: 'Darth Vader',
        role: 'Sith Lord',
        forcePoints: 30000,
        age: 45,
        avatar: 'https://pm1.narvii.com/5808/e457a9054c0d1e7e9aa779ab24e7a9a53d36536c_00.jpg',
        routeName: 'darthvader'
    },
]

app.get('/', (req, res) => {
    res.send('May the force be with you.');
});

app.get('/api/characters', (req, res) => {
    res.json(charactersArray);
});

app.get('/api/characters/:routeName', (req, res) => {
    const targetCharacter = req.params.routeName;
    const character = charactersArray.find(character => {
        return character.routeName === targetCharacter;
    });
    res.json(character); 
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});