// const userDice = Math.floor((Math.random() * 6) + 1);
// console.log(`Hai tirato: ${userDice}`);

// const computerDice = Math.floor((Math.random() * 6) + 1);
// console.log(`Il computer ha tirato: ${computerDice}`);

// if (userDice > computerDice) {
//     console.log("Hai vinto!");
// }

// else if (userDice < computerDice) {
//     console.log("Hai perso!");
// }

// else {
//     console.log("Pareggio!");
// } 


const dice = [1, 2, 3, 4, 5, 6];

const userDice = dice[Math.floor((Math.random() * dice.length))];
console.log(`Hai tirato: ${userDice}`);

const computerDice = dice[Math.floor((Math.random() * dice.length))];
console.log(`Il computer ha tirato: ${computerDice}`);

if (userDice > computerDice) {
    console.log("Hai vinto!");
}

else if (userDice < computerDice) {
    console.log("Hai perso!");
}

else {
    console.log("Pareggio!");
}