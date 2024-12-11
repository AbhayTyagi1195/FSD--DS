import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const DashBoard = ({ regDash }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" style={{ backgroundColor: "grey" }}>
                        <h1>Welcome {regDash.name}</h1>
                        <h2>Email ID {regDash.email}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;