import React from 'react'

const Label = ({label}) => {
    const labelStyle = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    return (
        <label className={labelStyle}>
            {label}
        </label>
    )
}

export default Label
