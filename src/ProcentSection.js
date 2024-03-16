import "./ProcentSection.css"

function ProcentSection(){
    return(
        <div className="ProcentSection">
            <label>Select Tip %</label>
           
            <div className="btns-container">
                <button >5%</button>
                <button >10%</button>
                <button >15%</button>
                <button >25%</button>
                <button >50%</button>
                <input type="number"/>
            </div>
        </div>
    )
}


export default ProcentSection;