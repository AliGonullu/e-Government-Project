import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState({ name: "Ali", surname: "Gönüllü", age: 22 });

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h3>Hello, {user.name} {user.surname}. You are {user.age}</h3>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;
