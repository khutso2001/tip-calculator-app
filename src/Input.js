import "./Input.css";
import DollarIcon from "./assets/images/icon-dollar.svg"

function Input (){
    return(
        <div className="Input">
            <label >Bill</label>
                <input type="number" className="Input-label"></input>
                <img src={DollarIcon} className="dollar-icon"/>
            
        </div>
    )
}

export default Input;

