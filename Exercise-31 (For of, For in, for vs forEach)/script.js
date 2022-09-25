// for of

console.log("for of practice")
var names = ["atik", "motalib", "shamim"];

for (let name of names)
{
   console.log(name);

}


// for in

console.log("for in practice")
let students = {
    id : 101,
    name : "Atik",
    address : "Rajshahi"
}

for (let x in students)
{
    // console.log(x);
    console.log(`${x} : ${students[x]}`)
}


//for vs forEach
//for
console.log("for practice")

const numbers = [10, 20, 30, 40];

for(let i = 0; i<numbers.length; i++)
{
    console.log(numbers[i])
}

//forEach
console.log("forEach practice")

const id = [110, 120,130,140, 150];

id.forEach(roll);

function roll(x)
{
    console.log(x);
}

console.log("forEach practice using anonymous function")
const atik = [111, 222, 333];
atik.forEach(function(x){
    console.log(x)
})

//Square inpurt number using forEach
console.log("Square inpurt number using forEach practice")

var nums = [ 2, 4, 6];
var sqrNums = [];

nums.forEach(function(x){
    sqrNums.push(x*x)
})

console.log(sqrNums);

//add 5 with nums array
console.log("add 5 with nums array");
console.log(`Nums Array= ${nums}`);

nums.forEach(function(x,index,array){
    array[index] = x+5;
})
console.log(`After add 5 Nums Array= ${nums}`)