/**
 * Functional component for displaying an alert message.
 * This component creates a div element with a role of 'alert', used for accessibility purposes
 * to denote an important message on the page. The component accepts props that allow for
 * customization of its class for styling and the message displayed.
 *
 * @param {Object} props - The properties passed to the Alert component.
 * @param {string} props.className - Additional CSS class names to apply to the alert div for styling.
 * @param {string} props.message - The text or content displayed inside the alert.
 * @returns {JSX.Element} A JSX element representing the alert, styled according to the passed parameters.
 */
const Alert = (props) => {
    return (
        <div className={"alert " + props.className} role="alert">
            {props.message}
        </div>
    )
}

export default Alert;