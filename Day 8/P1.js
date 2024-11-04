async function Order_Food(name,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Order "+name+" Prepared at "+time);
        },time);
    });
}
async function Restaurant(){
    const order1=await Order_Food("Pizza",3000);
    console.log(order1);
    const order2=await Order_Food("Burger",2000);
    console.log(order2);
    const order3=await Order_Food("Coke",1000);
    console.log(order3);
    const order4=await Order_Food("Pasta",4000);
    console.log(order4);
    return "All Orders are Prepared";
}
Restaurant().then(r => console.log(r));