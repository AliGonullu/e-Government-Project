import React, { useContext } from "react";
import { UserContext } from "./ComponentA";


function ComponentD() {
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h3>Bye bye, {user.name} {user.surname}. You are {user.age}</h3>
        </div>
    )
}

export default ComponentD;
