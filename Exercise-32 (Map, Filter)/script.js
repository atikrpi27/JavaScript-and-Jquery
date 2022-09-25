//Map

console.log("Map");
const names = ["Atik", "Shamim", "Motalib"];
const newNames = names.map(function(x){
    return (x + " Rahman");
})

console.log(newNames);

//Filter
console.log("Filter");
var number = [5,7,9,11,15,20]
var filterNumber = number.filter(function(x){
   return x>10;
})

console.log(filterNumber);