const intialstate = {
    currentPage : -1,
    pageSize : -1
}

export default function (state = intialstate, action) {
    if (action.type === 'Page_Changed') {
        return Object.assign({}, state, {
            currentPage: action.payload.pageNo,
            pageSize : action.payload.pageSize
          })}

    return state

}