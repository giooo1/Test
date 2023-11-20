function numbers(a,b){
    if(a==b) return 'a და b ტოლია'
    if(a>b) return 'a მეტია b-ზე'
    if(a<b) return 'a ნაკლებია b-ზე '
}
console.log(numbers(5,6));



let myString = "the quick brown fox jumped over the lazy dog";
let word = myString.split(" ")

function array(a){
    let c = ""
    for(let i=0; i<a.length; i++){
        if(a[i].length>c.length){
            c=a[i]
        }
    };
    return c
}

console.log(array(word))



function numbers1(c,d){
    if(c+d>100) return "True"
     if(c+d<=100) return "False"
}
console.log(numbers1(80,22))


function score(a,b,c){
let total = a*1+b*2+c*3
return total
}
console.log(score(12,5,3))


function arr(start,end){
    let numbers = []
    while (start<=end){
    numbers.push(start);
    start++
    }
    return numbers
}
console.log(arr(1,11))


function number(e){
let randomnum = Math.floor((Math.random() * 10)+1);
if(e == randomnum){
    console.log("True")
} else {
    console.log("False")
}
}
number(3)


let person = {
    firstname: "Giorgi",
    lastname: "Gakharia",
    age: 27
}

function person1(age){
if(age<18){
    console.log(person.firstname,+ " " + "არასრულწლოვანია")
} if (age>=18){
    console.log(person.firstname, + " " + "სრულწლოვანია")
}
}
person1(person.age)
