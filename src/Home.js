import React from "react";

function Home(){
    return(
        <div>
        <h1> <br></br> HOME PAGE</h1>
        <br></br><br></br><br></br>
        <img src={process.env.PUBLIC_URL + "/welcome-photos.png"} width="500" alt="welcome" />      
         <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br>
        Vac React Assignmnet-1
        <br></br><br></br><br></br><br></br><br></br> 
        <br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}
export default Home;