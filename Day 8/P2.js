async function Order_Food(name,time){
    return new Promise((resolve,reject)=>{
        if (name==="Burger"){
            reject("Sorry! We are out of Burger");
        }
        setTimeout(()=>{
            resolve("Order "+name+" Prepared at "+time);
        },time);
    });
}
async function Restaurant(){
    const order1=await Order_Food("Pizza",3000);
    console.log(order1);
    try{
        const order2=await Order_Food("Burger",2000);
        console.log(order2);
    }catch(e){
        console.log("Error: "+e);
    }
    const order3=await Order_Food("Coke",1000);
    console.log(order3);
    const order4=await Order_Food("Pasta",4000);
    console.log(order4);
    return "All Orders are Prepared";
}
Restaurant().then(r => console.log(r));