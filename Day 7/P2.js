function Fetch_Data(){
    return new Promise((resolve)=>{
        let Students= [
         {name: "Alice" , score: 100},
        {name: "Bob" , score: 90},
        {name: "Charlie" , score: 80},
        {name: "David" , score: 40},
        ];
        setTimeout(()=>{
            console.log("Data Fetched");
            resolve(Students);
        },2000);
    });
}
Fetch_Data().then((data)=>{
    let sum=data.map((student)=>student.score).reduce((sum,y)=>sum+y,0);
    console.log(sum);
    console.log("Data Received Successfully");
}).catch((message)=>{
    console.log(message);
});