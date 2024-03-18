import "./InputPerson.css";
import PeopleIcon from "./assets/images/icon-person.svg"

function InputPerson (props){
    return(
        <div className="InputPerson">
            <div className="labels">
                <label >Number of People</label>
                <p className="error">{props.person <= 0 ? "Can’t be zero" : ""}</p>
            </div>
            
            <div className="InputPerson-body">
                <input  type="number" className="bill-InputPerson" placeholder="0" onChange={(e)=>{
                        props.setPerson(e.target.value);
                       
                }}></input>
                <img src={PeopleIcon} className="dollar-icon"/>
            </div>
                
            
        </div>
    )
}

export default InputPerson;

