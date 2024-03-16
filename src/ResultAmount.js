import "./ResultAmount.css"

function ResultAmount (){
    return(
        <div className="ResultAmount">
            <div className="person">
                <label>Tip Amount</label>
                <p>/ Person</p>
            </div>
            <div className="amount">
                <p>$0.00</p>
            </div>
            

        </div>
    )
}

export default ResultAmount;