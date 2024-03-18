import "./ResetButton.css"

function ResetButton (props){
    const handeleResetButton =()=>{
        props.setBill("");
        props.setPerson("");
        props.setProcent("");
        props.setTipAmount(0);
        props.setTotal(0);
    }
    return(
        <div className="ResetButton">
            <button onClick={(e)=>{handeleResetButton(e)}}>RESET</button>
        </div>

    )
}

export default ResetButton;