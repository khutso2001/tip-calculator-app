import "./ProcentSection.css"

function ProcentSection(props){
    function handleSelectProcent(e){
        props.setProcent(e.target.value)
    }
    return(
        <div className="ProcentSection">
            <label>Select Tip %</label>
           
            <div className="btns-container">
                <button value="5" onClick={handleSelectProcent}>5%</button>
                <button value="10" onClick={handleSelectProcent}>10%</button>
                <button value="15" onClick={handleSelectProcent}>15%</button>
                <button value="25" onClick={handleSelectProcent}>25%</button>
                <button value="50" onClick={handleSelectProcent}>50%</button>
                <input type="number" placeholder="Custom" className="procent-input" onChange={handleSelectProcent}/>
            </div>
        </div>
    )
}


export default ProcentSection;