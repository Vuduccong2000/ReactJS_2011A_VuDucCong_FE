import React from 'react';
import PropTypes from 'prop-types';
button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string | "A",
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
function button(props) {
    const {children, className, type, onClick} = props;
    return (
        <div>
            <button onClick={onClick} className={className} type={type}>{children}</button>
        </div>
    );
}

export default button;