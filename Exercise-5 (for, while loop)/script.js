//print my name in new line 10 times
var x
for(x = 1 ; x <= 10; x++){
    document.write("My name is Atik </br>")
}

//for break
document.write("</br>")
document.write("</br>")

//print 1 to 100 
var y
for(y = 1 ; y <= 100; y++){
    document.write(" " + y)
}

//for break
document.write("</br>")
document.write("</br>")

//add 1 to 10
var num,add=0
for(num=1; num<=10; num++){
    add+=num
    
}
document.write("addition of 1-10 is: " +add);

//for break
document.write("</br>")
document.write("</br>")

//add even number 1 to 10
var a,sum=0
for(a=2; a<=100; a=a+2){
    sum+=a
}
document.write("addition of Even Number 1-100 is: " +sum)

//for break
document.write("</br>")
document.write("</br>")

//while loop
var b=1
while (b<=10) {
    document.write(" Atik" + b);
    b=b+1;
}

//for break
document.write("</br>")
document.write("</br>")

//add 1-100 using while loop
var c=1;
sum=0;
while (c<=100) {
    sum += c;
    c=c+1;
}
document.write("addition of 1-100 using while loop is:  " + sum);


//for break
document.write("</br>")
document.write("</br>")

//add odd number 1-100 using while loop
var d=1;
sum=0;
while (d<=100) {
    sum += d;
    d=d+2;
}
document.write("addition odd number of 1-100 using while loop is:  " + sum);