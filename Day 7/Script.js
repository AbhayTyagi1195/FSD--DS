// let Students=
// [
//     {name: "Alice" , score: 100},
//     {name: "Bob" , score: 90},
//     {name: "Charlie" , score: 80},
//     {name: "David" , score: 40},
// ];
// console.log(Students);
// let Students1=Students.filter((student)=>student.score>60).map((student)=>student.score*2).reduce((sum,y)=>sum+y,0);
// console.log(Students1);
// Say_Hello=()=>{
//     console.log("Hello");
// }
// console.log("Task Started");
// Say_Hello();
// setTimeout(Say_Hello,2000);
// console.log("Task Ended");
console.log("Start");
setTimeout(() => {
    console.log("First Task Completed");
    setTimeout(() => {
        console.log("Second Task Completed");
        setTimeout(() => {
            console.log("Third Task Completed");
        }, 3000);
            setTimeout(() => {
                console.log("Fourth Task Completed");
            }, 4000);
    }, 2000);
}, 1000);
console.log("End");