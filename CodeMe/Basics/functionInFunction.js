function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, bananas) {
    const applePieces = cutFruitPieces(apples);
    const bananaPieces = cutFruitPieces(bananas);

    const juice = `Saft mit ${applePieces} Apfelstücke und a bisserl ${bananaPieces} Bananenstücke`;
    return juice;
}

console.log(fruitProcessor(2, 3));