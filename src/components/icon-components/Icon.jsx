
import React from 'react'

const Icon = ({
    icon,
    fontSize,
    color,
    textAlign,
}) => {
    const style = {
        fontSize,
        color,
        textAlign,
    }
    return (
        <i style={style} className={icon} />
    )
}

export default Icon

