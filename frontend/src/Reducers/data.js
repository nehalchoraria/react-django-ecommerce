const intialstate = {
    products : []
}

export default function (state = intialstate, action) {
    if (action.type === 'Product_List') {
        return Object.assign({}, state, {
            products: action.payload,
          })}
    return state
}