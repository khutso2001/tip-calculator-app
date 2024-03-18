import "./Input.css";
import DollarIcon from "./assets/images/icon-dollar.svg"

function Input (props){

    const handleBillChange = (e) => {
        const inputAmount = e.target.value;
        const numericAmount = Number(inputAmount); // Parse input as a number
        props.setBill(numericAmount);
      }; 

    return(
        <div className="Input">
            <label >Bill</label>
            <div className="input-body">
                <input type="number" className="bill-input" placeholder="0" onChange={(e)=>{handleBillChange(e)}}></input>
                <img src={DollarIcon} className="dollar-icon"/>
            </div>
        </div>
    )
}

export default Input;

