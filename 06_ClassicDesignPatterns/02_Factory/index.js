import Garnizon from "./Solution/Garnizon";

const garnizon = new Garnizon();
const tab = [];
const order = [
    {type: "strzelec", name: "Jan", age: 23},
    {type: "strzelec", name: "Jan2", age: 23},
    {type: "strzelec", name: "Jan3", age: 23},
    {type: "strzelec", name: "Jan4", age: 23},
    {type: "konny", name: "Jan", age: 23},
    {type: "konny", name: "Jan2", age: 23},
    {type: "konny", name: "Jan3", age: 23},
    {type: "piechur", name: "Jan", age: 23},
    {type: "piechur", name: "Jan2", age: 23},
    {type: "piechur", name: "Jan3", age: 23},
]

for (let i = 0; i < order.length; i++) {
    let {type, name, age} = order[i];
    tab.push(garnizon.createSoldier(type, name, age));
}
console.log(tab);

const tab2 = order.map((el) => garnizon.createSoldier(el.type, el.name, el.age));
console.log(tab2);

