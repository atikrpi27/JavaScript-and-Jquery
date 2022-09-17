//setItem(key,value)
const name = localStorage.setItem("name","Atik"); 
const address = localStorage.setItem("address","Rajshahi");
const phone = localStorage.setItem("phone","0123");

//getItem(key)
const outputName = localStorage.getItem("name");
const outputAddress = localStorage.getItem("address");
const outputPhone = localStorage.getItem("phone");

// console.log(outputName,outputAddress,outputPhone);

//SetItem as Array or object(JSON.stringify(key))
const names = ["Atik", "sagor", "Motalib", "Shamim"];
localStorage.setItem("ourName", JSON.stringify(names));

//getItem as Array or object(JSON.parse(localStorage.getItem(key)))
const res = JSON.parse(localStorage.getItem("ourName"));
// console.log(res);

//removeItem(key)
localStorage.removeItem("phone");

//removeAllItems(API name.clear())
localStorage.clear(); //cleared all setItem on localStorage