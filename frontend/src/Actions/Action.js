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

export const updateProductList = (products) => {
    console.log('ProductList',products)
    return {
        type: "Product_List",
        payload: products
    }
}

export const updateTab = (tab) => {
    console.log('Tab_Change',tab)
    return {
        type: "Tab_Change",
        payload: tab
    }
}