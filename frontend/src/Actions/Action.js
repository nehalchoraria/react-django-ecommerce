export const changeColor = (color) => {
    return {
        type: "Color_Changed",
        payload: color
    }
}

export const setDefaultPage = (pageNo,pageSize) => {
    console.log('Page_Changed',pageNo,pageSize)
    return {
        type: "Page_Changed",
        payload: {pageNo:pageNo,
                  pageSize:pageSize}
    }
}