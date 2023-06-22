const getSizeString = (size: string, defaultValue?: string) => {
    const sizeNumber = Number(size)

    if (!!sizeNumber) return `${sizeNumber}px`
    return size || defaultValue
}

export const getStyles = (style: any) => {
    if (!style) return

    style = { ...style }
    for (const key in style) {
        style[key] = getSizeString(style[key])
    }
    return style
}
