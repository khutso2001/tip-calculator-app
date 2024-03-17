import "./ResultAmountTip.css"

function ResultAmountTip (props){
   
    const returnCurrencyAmt = (amt) =>{
        return new Intl.NumberFormat('en-US',{
            style:'currency', currency: 'USD'
        }).format(amt);
    }
    return(
        <div className="ResultAmountTip">
            <div className="person">
                <label>Tip Amount</label>
                <p>/ Person</p>
            </div>
            <div className="amount">
                <p>{returnCurrencyAmt(`${props.tipAmount ? props.tipAmount : "0"}`)}</p>
            </div>
            

        </div>
    )
}

export default ResultAmountTip;