import React from "react"
import Marks from "./Marks.jsx";
const DisplayMarks=()=>{
    const students=[{Name:"Abhay Tyagi",Roll:2200321540004,m1:87,m2:87,m3:85,m4:84,m5:86},
        {Name:"Arpit Jain",Roll:2200321540038,m1:78,m2:85,m3:75,m4:84,m5:85},
        {Name:"Adarsh Kumar",Roll:2200321540008,m1:78,m2:85,m3:75,m4:84,m5:85},
        {Name:"Ayush Chauhan",Roll:2200321540051,m1:78,m2:85,m3:75,m4:84,m5:85},
        {Name:"Archit Kumari",Roll:2200321540036,m1:78,m2:85,m3:75,m4:84,m5:85},
    ];
    return (<div id="disp">
        {/*<Marks name={"Abhay Tyagi"} roll={2200321540004} m1={87} m2={87} m3={85} m4={84} m5={86}/>*/}
            {students.map((student,index)=>(
                <Marks key={index} name={student.Name} roll={student.Roll} m1={student.m1} m2={student.m2} m3={student.m3} m4={student.m4} m5={student.m5}/>
            ))}
    </div>
    );
};
export default DisplayMarks