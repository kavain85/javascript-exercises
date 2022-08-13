const repeatString = function(word,number) {
    if (number < 0) return 'ERROR';
    let connector = '';
    for (i = 0; i < number; i++) {
        connector += word;
    } return connector;
};

// Do not edit below this line
module.exports = repeatString;
