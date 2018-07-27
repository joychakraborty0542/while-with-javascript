alert("welcone to while loop")
var num=prompt("1 for printing num -10 and 19 ,2 for printing all even btw 10and 40, 3 for printing all odd btw 300 and 333, 4 for printing all num divisible by 5 and 3 btw 5 and 50")


	                                         
var m=Number(num);
if(m===1)
{
c=-10;
while(c<20){
	console.log(c);
	c++
}
}
if(m===2){
n=10
while(n<40)
{
	if(n%2===0){
 console.log(n);
}
n++
}
}
if(m===3)
{
a=301
while(a<333)
{
	if(a%2!==0){
 console.log(a);
}
a++
}
}
if(m===4)
{
b=5
while(b<50)
{
	if(b%3===0&b%5===0){
 console.log(b);
}
b++
}
}


