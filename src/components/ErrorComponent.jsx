import React from 'react';

function ErrorComponent(props) {
    return (
        <div className="error-container">
            <br />
            {props.message}
        </div>
    )
};

export default ErrorComponent;