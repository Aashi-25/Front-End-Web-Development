import { GlobalContext } from "../../context";
import { useContext } from "react";

function ContextTextComponent() {
    const getStateFromContext = useContext(GlobalContext);
    console.log(getStateFromContext);

    const {theme} = useContext(GlobalContext);
    return <h1 style = {{
        fontSize : theme === "light" ? "50px" : "100px" , backgroundColor : theme === "light" ? "#fff" : "#000" , color : theme === "light" ? "blue" : "yellow"
    }}>A dreamer today and forever!</h1>
}

export default ContextTextComponent;