import { Outlet } from 'react-router-dom';

/**
 * ErrorPage is a functional component that renders an error message to the user.
 * It acts as a generic error handling page for unmatched routes or other errors within the application.
 * This component displays a simple "Oops!" header and a message indicating an unexpected error.
 * It includes an Outlet for rendering additional components or messages passed down through the routing.
 *
 * @returns {JSX.Element} A JSX element representing an error page with a standardized message.
 */
export default function ErrorPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3">Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
