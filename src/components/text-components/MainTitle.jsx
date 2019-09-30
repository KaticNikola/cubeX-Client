
import React from 'react'

const MainTitle = ({
    id,
    actionType,
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
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        lineHeight: lineHeight,
        letterSpacing
    }
    return (
        <h1 id={id} name={actionType} style={style} >{content}</h1>
    )
}

export default MainTitle
