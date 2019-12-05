export default function(state = {} , action ) {

    let defaultColor = 'red'
    if(action.type === 'Color_Changed')
    defaultColor = action.payload

    return {
        colorList : ['red',
        'black',
        'defaul'
        ],
        defaultColor : defaultColor
    }
      
}