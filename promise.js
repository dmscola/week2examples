
const request = require('request') ;

url = 'https://github.com/dwyl/english-words/raw/master/words.txt';

let start = Date.now();

request.get(url, (error, response, body)  => {
    console.log(body);
    let elapsed = Date.now() - start;
    console.log('That took ' + elapsed + ' ms');
 });

target = 1000000000;
start = Date.now();
for (let i = 0; i < target; i++) {
    // do nothing
}
elapsed = Date.now() - start;
console.log('It took ' + elapsed + ' ms to count to ' + target);
