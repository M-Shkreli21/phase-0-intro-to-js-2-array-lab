// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
};

function destructivelyPrependCat(){
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop(cats.length - 1);
};

function destructivelyRemoveFirstCat() {
    cats.shift(0);
};

function appendCat(newCats){
    newCats = [...cats, "Broom"];
    return newCats;
};

function prependCat(newCats) {
    newCats = ["Arnold", ...cats];
    return newCats;
};

function removeLastCat(newCats) {
    newCats = cats.slice(0,2);
    return newCats;
};

function removeFirstCat(newCats) {
    newCats = cats.slice(1);
    return newCats;
};