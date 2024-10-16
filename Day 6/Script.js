let arr=[1,22,3,4,3,33,2];
//let new_arr=arr.map(x=>x*2);
//console.log(new_arr);
// let even_arr=arr.filter(x=>x%2==0);
// console.log(even_arr);
let sum=arr.filter(x=>x%2==0).reduce((acc,curr)=>acc+curr,0);
console.log(sum);