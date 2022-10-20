const person = {
    name: "Grzegorz Kowalski",
    age: 35,
    nationality: "Polish"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(obj, prop, "get");
        console.log(`Wartość ${prop} to ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(obj,prop, value);
        if (prop === "age" && typeof value !== "number") {
            throw new Error("Niepoprawny wiek");
        }
        else {
            Reflect.set(obj, prop, value);
        }
    }
})

personProxy.age;
personProxy.name = "Tomasz Kot";
personProxy.name;
personProxy.age = "30";
personProxy.age;
