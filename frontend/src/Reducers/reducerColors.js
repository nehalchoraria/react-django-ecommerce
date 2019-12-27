const intialstate = {
    defaultColor : 'red',
    colorList: ['red',
            'black',
            'grey'
        ]
}

export default function (state = intialstate , action) {

    if (action.type === 'Color_Changed')
        return Object.assign({}, state, {
            defaultColor: action.payload,
        })
    
    return state;

}