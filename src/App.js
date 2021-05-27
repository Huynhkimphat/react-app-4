import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
// TODO : useEffect
// * useEffect(()=>{}) --> run when any components reload or re-render
// * useEffect(()=>{},[]) --> run 1 time when page reload
// * useEffect(()=>{},[x,y]) --> run when component x,y reload
// * useEffect(()=>{...return ()=>{}},...) -> return statement not run when page reload<the first time>)

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // No dependencies => just run when load page
    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");
        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
