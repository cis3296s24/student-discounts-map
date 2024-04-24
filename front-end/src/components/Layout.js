import Navbar from "./Navbar";
import React from "react";

/**
 * Layout component for the main page layout.
 * @component
 * @param children - The children components to render.
 * @returns {Element}
 */
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