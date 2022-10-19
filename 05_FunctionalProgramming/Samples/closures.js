function returnInnerName() {
    const name = "Grzegorz";

    function displayName() {
        return name;
    }

    return displayName;
}

const getName = returnInnerName()();
console.log(getName);
