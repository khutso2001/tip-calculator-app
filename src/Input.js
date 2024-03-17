import "./Input.css";
import DollarIcon from "./assets/images/icon-dollar.svg"

function Input (props){
    return(
        <div className="Input">
            <label >Bill</label>
            <div className="input-body">
                <input type="number" className="bill-input" placeholder="0" onChange={(e)=>{
                        props.setBill(e.target.value);
                       
                }}></input>
                <img src={DollarIcon} className="dollar-icon"/>
            </div>
                
            
        </div>
    )
}

export default Input;

