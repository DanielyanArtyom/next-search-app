import React from 'react'

const Button = ({
    disabled,
    clickHandler,
    children
}) => {
    return (
        <button className={`btn u-mw-400 ${disabled ? "btn-disabled" : ""}`}
            onClick={clickHandler}>
            {children}
        </button>
    )
}

export default Button
