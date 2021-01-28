const express = require('express');
const app = express();
const PORT = 3000;

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/top-crop/width/360/height/450?cb=20150206140125',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Knight',
        forcePoints: 10000,
        age: 23,
        avatar: 'https://i.pinimg.com/originals/f5/1c/54/f51c543269e3e87ae6753e8c1530e653.jpg',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Darth Sidious',
        role: 'Sith Master',
        forcePoints: 100000,
        age: 88,
        avatar: 'https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935',
        routeName: 'darthsidious'
    },
    {
        name: 'Darth Vader',
        role: 'Sith Lord',
        forcePoints: 50000,
        age: 45,
        avatar: 'https://pm1.narvii.com/5808/e457a9054c0d1e7e9aa779ab24e7a9a53d36536c_00.jpg',
        routeName: 'darthvader'
    },
]

app.get('/', (req, res) => {
    res.send('May the force be with you.');
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});