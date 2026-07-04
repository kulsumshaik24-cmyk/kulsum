console.log("Kulsum")
// console.log(Kulsum)

console.log(45)
console.log(true)

const a=10;
console.log(a)
// a=20;
{
    const b=20;
    console.log(b);
}
// console.log(b)
{
    var c=30;
    console.log(c)
}
console.log(c)
 let d=40;
 console.log(d);
 d="Kulsum"
 console.log(d);
 d=20
 console.log(d)
 d=4.3
 console.log(d)
 d=true
 console.log(d)

 var e=50;
 console.log(e)
 e="Kulsum"
 console.log(e)
 e=4.3
 console.log(e)
 e=false
 console.log(e)

let i=0;
 do{
    console.log(i);
    i++;
 }
 while(i<=5)

let j=4;
do{
    console.log(j);
    j++;
}
while(j<7)

let k=5;
do{
    console.log(k);
    k++;
}
while(k<5)


console.log("========ARRAY=========")
//Array declaration
let arr=[10, "kulsum",true,45,50,77.7];
console.log(arr);

for(let x of arr){
    console.log(x);
}

console.log("==============Object=================")
let obj={
    "key":"value",
    "name":"Kulsum",
    "age":20,
    "city":"NDD"
}
for (let x in obj)
{
    console.log(x)
    console.log(obj[x])
    console.log(x+":"+obj[x])
}

var arrobj=[{"name":"Kulsum","age":20},{"name":"badi","age":20}]
for(let x of arrobj){
    console.log(arrobj)
}