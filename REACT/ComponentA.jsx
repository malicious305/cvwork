import ComponentB from "./ComponentB.jsx";
import React , {useState,createContext} from 'react'

export const userContext = createContext();

function ComponentA(){

    const[user,setUser] = useState("Poirier");
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <userContext.Provider value={user}>
            <ComponentB user={user}/>
            </userContext.Provider>
            
        </div>
    );
}
export default ComponentA