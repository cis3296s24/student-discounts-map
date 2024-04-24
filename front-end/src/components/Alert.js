/**
 * Alert component for displaying messages to the user.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.className - CSS class name for styling the alert.
 * @param {string} props.message - Message to be displayed inside the alert.
 * @returns {JSX.Element} Alert component with the specified message and className.
 */

const Alert = (props) => {
    return (
        <div className={"alert " + props.className} role="alert">
            {props.message}
        </div>
    )
}

export default Alert;