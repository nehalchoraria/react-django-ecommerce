import {color as black} from "../Colors/black";
import {color as red} from "../Colors/red";
import {color as grey} from "../Colors/grey";

export const colorTheme = (color) => {
    if(color === 'red') 
      return red
    else if(color === 'black')
      return black
    else
      return grey
}