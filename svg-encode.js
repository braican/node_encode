#!/usr/bin/env node

var fs        = require("fs"),
    copypaste = require("copy-paste"),
    SVGO      = require("svgo"),
    svgo      = new SVGO();

if(!process.argv[2]){
    console.log("need to include a file");
    return;
}
fs.readFile(process.argv[2], 'utf8', function(error, data){
    if(error){
        return console.log(error);
    }

    svgo.optimize(data, function(result) {
        var encoded = encodeURIComponent( result.data );
        copypaste.copy(encoded);
        return console.log('copied');
    }); 
});