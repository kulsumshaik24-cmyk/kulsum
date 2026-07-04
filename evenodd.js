let arr=[21,54,74,89,689,2038,67];
for(let i=0; i<=arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i] + " is even");
    }
    else{
        console.log(arr[i] + " is odd");
    }
}

let arr1=[21,54,74,89,689,2038,67];
console.log("The total number of elements " + arr1.length);

let arr2=[21,54,74,89,689,2038,67];
arr2.push(40);
console.log(arr2)

let arr3=[21,54,74,89,689,2038,67];
arr3.pop();
console.log(arr3);

let arr4=[21,54,74,89,689,2038,67];
arr4.unshift(10);
console.log(arr4)

let arr5=[21,54,74,89,689,2038,67];
arr5.shift();
console.log(arr5)

let arr6=[21,54,74,89,689,2038,67];
let a=arr6.indexOf(89)
console.log(a)

let arr7=[21,54,74,89,689,2038,67];
console.log(arr7.includes(67))

let arr8=[21,54,74,89,689,2038,67];
let b=arr8.join();
console.log(b)
//console.log(arr8.join()) comma
//console.log(arr8.join( )) space
 
let arr9=[21,54,74,89,689,2038,67];
arr9.reverse();
console.log(arr9)

let arr0=[21,54,74,89,689,2038,67];
arr0.sort((a,b) => a-b);
console.log(arr0)

let arry = ["Banana", "Apple", "Mango"];

arry.sort();

console.log(arry);

let arr01=[21,54,74,89,689,2038,67];
let newa=arr01.slice(1,5);
console.log(newa);

let arr02=[21,54,74,89,689,2038,67];
arr02.splice(3,3,40,56);
console.log(arr02)
// array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex → Position where the operation starts.
// deleteCount → Number of elements to remove.
// item1, item2, ... → Elements to add (optional).
//add
let arr = [10, 20, 40];
arr.splice(2, 0, 30);
console.log(arr);
 //remove
let arr = [10, 20, 30, 40];
arr.splice(2, 1);
console.log(arr);
//replace
let arr = [10, 20, 30, 40];
arr.splice(2, 1, 35);
console.log(arr);
