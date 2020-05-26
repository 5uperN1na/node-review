let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = path.join(__dirname, '../data.json');

// fs.readFile(dataPath, {
//     encoding: "UTF-8"
// }, (err, data) => {

//     let person = JSON.parse(data);
//     console.log(person.name);
//     console.log(person.shirtColor);

// });

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);
    // console.log(res);


    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title);
        fs.appendFileSync(dataPath, item.data.title + '\n');
        fs.appendFileSync(dataPath, item.data.url + '\n');
        fs.appendFileSync(dataPath, item.data.author + '\n');



    });

    // fs.writeFile(dataPath, res.body, err => {
    //     if (err) console.log(err);
    // });





});