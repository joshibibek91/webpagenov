import React from "react";


function message(){
    alert("Welcome to Event Handeling")
    console.log("Welcome to event handeling in conso;e")
}

function Course(){

    return(
        <>
        <section className="content">
            <div className="cont">
                <h1>Course</h1>
                <div className="container">
                <button type="button" className="btn btn-danger" onClick={message}>Danger</button>
                </div>
            </div>
        </section>

        
        </>

    )
}

export default Course