/* ========================= Global variable ======================== */

let a = 101;
const ad = 102;
// var a ="fdgdf"               //can not declared same variable name
console.log('dfasf', a)

/* ========================= Let Keyword ======================== */
function atik(){
    let a="Atikur Rahman"
    // let a="nayon Rahman"     //can not re-declared
    let b=10;
    b = 15;                     //can re-assign
    document.write(a)
    return b
}

console.log(atik())


/* ========================== Const Keyword ======================= */

const abc = "atik"
// const abc = "noyon"          //can not re-declared
// abc = "Atikur Rahman"        //can not re-assign
console.log(abc)        
const array = [10,2,5645];
// array=[10];                  //can't be re-assign
array.pop=[10];                 //can use push, pop, slice etc
console.log(array)

/* ======================= var Keyword ========================== */

var ac = "dasfas"
var ac = "atik"                  //can re-declared
ac = "Atikur Rahman"             //can re-assign
// const ad=("ad =",ad)
console.log(ac)

/* ======================= Mixed variable ========================== */

function noyon(){
    let a = "fadskljfkl"
    const ad=868
    var as = "dfsf";
    a = "atik re"
    console.log(a)
    console.log(as)
    console.log(ad)
}
noyon()