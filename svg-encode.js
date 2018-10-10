#!/usr/bin/env node

const fs = require('fs');
const copypaste = require('copy-paste');
const SVGO = require('svgo');
const svgo = new SVGO();

const filePath = process.argv[2];

if (!filePath) {
    console.log('Please pass in a path to an SVG file.');
    return;
}

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        return console.log(error);
    }

    svgo.optimize(data, { path: filePath }).then(result => {
        const encoded = encodeURIComponent(result.data);
        copypaste.copy(encoded);
        return console.log('SVG encoded and copied to your clipboard.');
    });
});
