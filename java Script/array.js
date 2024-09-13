let  arr =[1,2,3,4,5]
console.log(arr);

console.log(arr[3]);

arr.push("jsp",22.5)
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("first",23,34);
console.log(arr);

arr.splice(1,3,"ashish");
console.log(arr);

console.log(arr.length)

let arr_g = arr.slice(1,3);
console.log(arr_g);

arr.reverse();
console.log(arr);

let name = arr.indexOf(12,1);
let anme = arr.lastIndexOf(12);
console.log(name);

console.log(arr.includes("gdhdhdhdhṇ"))

let str = arr.join(" - ");
console.log(str);

let stt = arr.toString();
console.log(stt);
