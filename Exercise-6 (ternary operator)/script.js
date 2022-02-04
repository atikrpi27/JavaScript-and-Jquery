var num = prompt("Enter Your number: ")
var result = num>=0 &&  num<33 ? "You are Fail" : num >= 33 && num<40 ? "Your Grade is D" : num >= 40 && num<50 ? "Your Grade is C" : num >= 50 && num<60 ? "Your Grade is B" : num >= 60 && num<70 ? "Your Grade is A-" : num >= 70 && num<80 ? "Your Grade is A" : num >= 80 && num<=100 ? "Your Grade is A+" : "Invalid marks";
document.write(result)