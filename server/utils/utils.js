'use strict';


function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function guid() {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

function makeUniqueFileName(filename) {
    console.log('filename: ', filename);

    var replacement = "_" + guid() + '.';
    return filename.replace(/.([^.]*)$/,replacement+'$1');
}

module.exports = {
    guid,
    makeUniqueFileName
};