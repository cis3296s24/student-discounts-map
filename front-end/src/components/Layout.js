import Navbar from "./Navbar";
import React from "react";
/**
 * Layout component that wraps around the main content of the application.
 * It provides a consistent structure to the app by displaying a `Navbar` component at the top
 * and rendering the `children` props below it, which represents the main content of the page.
 *
 * @function Layout
 * @param {React.ReactNode} children - The child components to be rendered within the layout.
 *        This is typically used to render the main content of a page.
 * @returns {JSX.Element} A JSX element representing the common layout of the application.
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