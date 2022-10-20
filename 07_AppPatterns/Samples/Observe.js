var model = {};
Object.observe(model, function (changes) {
    changes.forEach(function (change) {
        console.log("Zmiana " + change.type + " wystąpiła dla " + change.name + ".");
        if (change.type == "update")
            console.log("\tStara wartość to " + change.oldValue + " Nowa wartość to " + change.object[change.name]);
        if (change.type == "add")
            console.log("\tNowa wartość to " + change.object[change.name]);
        console.dir(change.object.item);
    });
});
model.item = 7;
model.item = 8;
delete model.item;
