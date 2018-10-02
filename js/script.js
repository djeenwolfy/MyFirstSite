/*
var a=4,b=6;
if (a>3 && b>3)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
if ((a>3 && b>=7)||a+b>10)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
if (a*b!=1)
console.log("Yes");
else
console.log("No");
console.log("-------------------------");
var z=13,y=2,n=229;
var sum=z+y;
if (z=>y)
{ if
(sum=>n)
console.log("Yes");
else
console.log("No");}
else
{console.log("no");
}

var z=13,y=2,n=229;
var sum2=z+y;
var raz=z-y;
if (y!=z)
if (z=>y)
{ if
(sum=>n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz=>n)

console.log("Yes2");
else
console.log("No2");

}






var z=13,y=2,n=16;
var sum2=z+y;
var raz=z-y;
if (y != z)
if (z >= y)
{ if
(sum2 >= n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz >= n)
console.log("Yes2");
else
console.log("No2");
}


var u,t,num;
u=18;
t=28;
for( var k=0; k<=10; k++ ) 
 {
  num=u+t;
  console.log(k);
  console.log(num);
  console.log("_____");
  
 }

 console.log(" _____________________");
for( var k=0; k<=5; k++ ) 
{      
       console.log("|                     |",k);
       }

var total=0;
 console.log(" _____________________");
for( var k=0; k<=30; k=k+2) {
total=total+k;
console.log(total,k);
}
var one=4;
var two=2;


var kajdiy,pop,total=0;
for (var k=0; k<=30; k++) {
pop=k%2;
if (pop!=0)
total=total+k;
console.log(total,k);
}

   var a=15,b=7;
   switch ((a+b)/2) {
case 10: {
console.log("10");
break;}
case 11:{
console.log("11");
}
case 12: {var kajdiy,pop,total=0;
for (var k=0; k<=30; k++) {
pop=k%2;
if (pop!=0)
total=total+k;
console.log(total,k);
}
}
case 0 :{
var z=13,y=2,n=229;
var sum2=z+y;
var raz=z-y;
if (y!=z)
if (z=>y)
{ if
(sum=>n)
console.log("Yes1");
else
console.log("No1");}
else {
if (raz=>n)

console.log("Yes2");
else
console.log("No2");
break;
}
}}
console.log("lkl");


var a=-10;
var total=0;
while (a<10){
	console.log("summ",total);
	total=total+a;
	a++;
}
console.log("summ",total);


var a=0;
var total=0;
do {

	console.log("summ",total);
	total=total+a;
	a=a+2; //a+=2
}
while (a<=50)
console.log(total)
*/
var a = {};
a.properties1="svoustvo"
a.properties2=123,
a.properties3=false,
a.properties4=true,
a.properties5="easy"
// Objeckt a 
for (var t in a){
	console.log(t);
	console.log(a[t]);
	console.log("___________")
}
// svoustva obj
//for (var t in a){
//	console.log(t);
//}
