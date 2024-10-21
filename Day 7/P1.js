// let My_Promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Data Sent Successfully");
//     }
//     else{
//         reject("Data Sending Failed");
//     }
// });
// My_Promise.then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// });
// let Fetch_Data=new Promise((resolve,reject)=>{
//     console.log("Fetching Data....");
//     let success=true;
//     setTimeout(()=>{
//         console.log("Data Fetched");
//     },2000);
//     if(success){
//         resolve("Data Fetched Successfully");
//     }
//     else{
//         reject("Data Fetching Failed");
//     }
// });
// Fetch_Data.then((message)=>{
//     console.log(message);
// }
// ).catch((message)=>{
//     console.log(message);
// });
function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("Task 1",2000).then(()=>
     task("Task 2",1000).then(()=>
        task("Task 3",500).then(()=>
            task("Task 4",100)
        )));