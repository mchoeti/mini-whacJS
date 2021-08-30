// nochmals durchcoden..





function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        /* aktueller Charakter */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
            hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

// test here
console.log(fearNotLetter("abce"));