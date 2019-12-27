const intialstate = {
    products : [],
    activeTab : 'Home'
}

export default function (state = intialstate, action) {
   
    if (action.type === 'Product_List') {
        return Object.assign({}, state, {
            products: action.payload,
          })}
    else if (action.type === 'Tab_Change') {
        return Object.assign({}, state, {
            activeTab: action.payload,
          })}
    return state
}