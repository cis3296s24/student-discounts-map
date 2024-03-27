import Navbar from "./Navbar";
import React from "react";

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <div  className="main-page">
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;