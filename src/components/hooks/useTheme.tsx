import {useContext} from 'react';
import { ThemeContext} from '../../contexts/ThemeContext';

export function useTheme(){
    const themeValue = useContext(ThemeContext)
   
    if(themeValue === undefined){
        throw new Error("component is not child of Theme Provider")
    }
    return themeValue;
}