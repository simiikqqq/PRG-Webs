/*Úkázka bez propojení JSON souboru*/

/*const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Eating", "Sleeping", "Singing"]
}
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": "34",
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": true
}]


const jsonString = JSON.stringify(people);

console.log(jsonString);*/



/*const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Eating", "Sleeping", "Singing"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": "34", "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": true}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);*/


/*Úkázka s propojení JSON soubory*/

fetch("people.json")  // najde soubor
    .then(response => response.json())  // vrátí data v json formatu
    .then(values => values.forEach(value => console.log(value.name))); // vypisuje data