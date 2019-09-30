import React from 'react'

const Description = ({
    id,
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,
    lineHeight,
    letterSpacing
}) => {
    const style = {
        fontSize,
        fontType,
        fontWeight,
        color,
        textTransform,
        fontStyle,
        textAlign,
        textDecoration,
        lineHeight,
        letterSpacing
    }
    return (
        <p id={id} style={style}>{content}</p>
    )
}

export default Description

