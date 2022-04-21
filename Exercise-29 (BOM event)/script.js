//location

console.log(location);

//href
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname
console.log(location.hostname);

//port
console.log(location.port);

//pathname
console.log(location.pathname);



//from index file
const locationDiv = document.querySelector(".location-div");

const p1 = locationDiv.children[0];
p1.textContent = location.href;

const p2 = locationDiv.children[1];
p2.textContent = location.protocol;

const p3 = locationDiv.children[2];
p3.textContent = location.hostname;

const p4 = locationDiv.children[3];
p4.textContent = location.port;

const p5 = locationDiv.children[4];
p5.textContent = location.pathname;