import {color as black} from "../Colors/black";
import {color as red} from "../Colors/red";
import {color as defaul} from "../Colors/defaul";

export const colorTheme = (color) => {
    if(color === 'red') 
      return red
    else if(color === 'black')
      return black
    else
      return defaul
}