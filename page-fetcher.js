const fs = require('fs');
const request = require('request');

const input  = process.argv.slice(2);
const pageFetch = input[0];
const saveLoc = input[1] //+ "mysuperday.txt" 


request(pageFetch, (error, response, body) => {

  fs.writeFile(saveLoc, body, (err) => {
    console.log("error", error)
    console.log(pageFetch)
    console.log(body)
  })
});

