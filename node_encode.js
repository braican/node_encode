#!/usr/bin/env node

var fs = require('fs');
var copypaste = require("copy-paste");

if(!process.argv[2]){
    console.log("need to include a file");
    return;
}
fs.readFile(process.argv[2], 'utf8', function(error, data){
    if(error){
        return console.log(error);
    }
    var encoded = encodeURIComponent( data );
    copypaste.copy(encoded);
    return console.log('copied');
    //return console.log(encodeURIComponent( data ) );
});

