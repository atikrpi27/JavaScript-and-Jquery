//setItem(key,value)
const name1 = sessionStorage.setItem("name","Atik"); 
const address1 = sessionStorage.setItem("address","Rajshahi");
const phone1 = sessionStorage.setItem("phone","0123");

//getItem(key)
const outputName1 = sessionStorage.getItem("name");
const outputAddress1 = sessionStorage.getItem("address");
const outputPhone1 = sessionStorage.getItem("phone");

console.log(outputName1,outputAddress1,outputPhone1);

//SetItem as Array or object(JSON.stringify(key))
const names1 = ["Atik", "sagor", "Motalib", "Shamim"];
sessionStorage.setItem("ourName1", JSON.stringify(names1));

//getItem as Array or object(JSON.parse(sessionStorage.getItem(key)))
const res1 = JSON.parse(sessionStorage.getItem("ourName1"));
console.log(res1);

//removeItem(key)
sessionStorage.removeItem("phone");

//removeAllItems(API name.clear())
sessionStorage.clear(); //cleared all setItem on sessionStorage