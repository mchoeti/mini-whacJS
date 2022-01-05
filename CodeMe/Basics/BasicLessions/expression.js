const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
};

console.log(calcAge2(1977));

const calcAgeNeu = birthYear => 2021 - birthYear;
const age3 = calcAgeNeu(1976);

console.log(age3);


// nicht vergessen alles neu mit JS 6 , na alles besser
// const firstName = "Christian";
const yearsToRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} Jahren`;
};

//console.log("Noch ", yearsToRetirement(1977), " Jahre arbeiten");
console.log(yearsToRetirement(1977, "Christian"));
console.log(yearsToRetirement(1978, "Jürgen"));
// ALT und Pfeil rauf oder runter bring halt die ganze Line rauf.