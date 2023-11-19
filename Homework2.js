for (let i = 0; i<15; i++ ) {
    console.log(i)
}


let fruits = ["Apple", "Banana", "Orange","Raspberries", "Blackberries"];
for (let i = 0; i<3; i++){
    console.log(fruits[i])
}

for (let i = 0; i<5; i++){
    if(i==1) {
        continue; }
        if(i==2) {
            continue; }
        console.log(fruits[i])
}

fruits.unshift("Tomatoes");
console.log(fruits)

let Raspberries = fruits.indexOf("Raspberries")
console.log(Raspberries)

let array = "Giorgi Gakharia"
for (let letter of array){
    if (letter == ("a")) {continue;}
    if (letter == ("i")) {continue;}
    if (letter == ("o")) {continue;}
        
    console.log(letter);
}


let petname = ["Bella", "Max", "Luna", "Charlie", "Charlie", "Cooper", "Max", "Milo"];
for (let i = 0; i<8; i++){
 if (petname[0] === petname[1]) break;
 if (petname[1] === petname[2]) break;
 if (petname[2] === petname[3]) break;
 if (petname[3] === petname[4]) break;
    console.log(petname[i])
}


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

console.log(person.firstName, + " " + person.lastName)

person.firstName = "Giorgi";
person.lastName = "Gakharia";
person.age = 26;
person.eyeColor = "blue";

console.log(person)

    