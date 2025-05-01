import { useContext } from "react";
import { GlobalContext } from "../../context"; 

function ContextButtonComponent(){

    const {handleChangeThemeOnButtonClick, theme} = useContext(GlobalContext);
    return(
         <button onClick = {handleChangeThemeOnButtonClick}> ChangeTheme </button>
    );
}

export default ContextButtonComponent;