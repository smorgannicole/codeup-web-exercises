const fighter = {
    name: "Ryu", //camel case everything the same way you normally do variables
    hp: 100,
    outfit: {
        color: "white",
        type: "karate gi",
    },
};
console.log(fighter.name);
console.log(fighter.hp);
console.log(fighter.outfit.color);

//destructing??
const {name, hp} = fighter;
console.log(name);
console.log(hp);