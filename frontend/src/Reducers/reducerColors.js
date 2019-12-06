export default function (state = {}, action) {

    let defaultColor = 'red'
    if (action.type === 'Color_Changed')
        defaultColor = action.payload
    console.log(defaultColor)

    return {
        colorList: ['red',
            'black',
            'defaul'
        ],
        defaultColor: defaultColor
    }

}