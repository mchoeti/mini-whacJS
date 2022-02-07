function addTogether() {
    const [a, b] = arguments;
    if (typeof (a) !== "number")
        return undefined;
    if (b === undefined)
        return (b) => addTogether(a, b);
    if (typeof (b) !== "number")
        return undefined;
    return a + b;
}

//if (typeof(a) !== "number")




console.log(addTogether(2, "sddd"));