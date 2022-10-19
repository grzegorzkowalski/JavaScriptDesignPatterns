const programmers = [
    {name: "Grzegorz", age: "36", occupation: "programmer"},
    {name: "Kamil", age: "32", occupation: "programmer"},
    {name: "Jacek", age: "36", occupation: "programmer"},
]

const changeOccupation = (element, occupation) => {
    element.occupation = occupation;
    return element;
}

const farmers = programmers.map((el) => changeOccupation(el, "farmer"));

console.log(farmers);
