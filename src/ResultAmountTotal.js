import "./ResultAmountTotal.css"

function ResultAmountTotal (props){
    const returnCurrencyAmt = (amt) =>{
        return new Intl.NumberFormat('en-US',{
            style:'currency', currency: 'USD'
        }).format(amt);
    }
    
    return(
        <div className="ResultAmountTotal">
            <div className="person">
                <label>total</label>
                <p>/ Person</p>
            </div>
            <div className="amount" >
                <p>{returnCurrencyAmt(`${+props.total ? props.total/props.person : "0"}`)}</p>
            </div>
            

        </div>
    )
}

export default ResultAmountTotal;