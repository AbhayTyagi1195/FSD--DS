import React from "react";
import "./Cards.css";
const Cards=({user,img_url,post,likes,comment})=>{
    return (
        <div>
            <h1>User:{user}</h1>
            <img src={img_url} width={100} height={200} alt={"Image"}/>
            <h2>Post:{post}</h2>
            <h2>Likes:{likes}</h2>
            <h2>Comment:{comment}</h2>
        </div>
    );
};
export default Cards;