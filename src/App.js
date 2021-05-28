import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
// TODO : useEffect
// * useEffect(()=>{}) --> run when any components reload or re-render
// * useEffect(()=>{},[]) --> run 1 time when page reload
// * useEffect(()=>{},[x,y]) --> run when component x,y reload
// * useEffect(()=>{...return ()=>{}},...) -> return statement not run when page reload<the first time>)

function App() {
    const ctx = useContext(AuthContext);
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
