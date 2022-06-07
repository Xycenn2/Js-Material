const hello = (name) => {
    // console.log("Hello " +name);
    console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
const cıkar = (a, b) => a - b;

const text = 'Text';
const user = {
    name: ' Hüseyin',
    surname: 'ER'
};

const users = [{
    name: 'Ahmet',
    surname: 'Diyar',
},
{
    name: 'Ayşe',
    surname: 'Hayriye',
},
];

export {
    hello,
    topla,
    cıkar,
    text,
    user,
    users,
}