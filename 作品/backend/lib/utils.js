var url = require("url");
var http = require("http");
let fs = require('fs');
function getPagesHtml(urls){
    return new Promise((resolve,reject) => {
        var urlParse = url.parse(urls);

        let options = {
          hostname:urlParse.hostname,
          path:urlParse.path
        }

        let req = http.request(options,(res)=>{
          var arr = [];
          res.on('data', (chunk) => {
            arr.push(chunk);
          });
          res.on('end', () => {
            resolve(arr);
          });

          res.on("error",(err)=>{
            reject(err)
          });

         });

        req.on("error", (err)=>{
          reject(err)
        })

        req.end();
    });
}
module.exports = {
  getPagesHtml
}
