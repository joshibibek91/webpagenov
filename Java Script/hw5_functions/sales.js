
s = prompt(`Please enter your total sales in Rupees:`)

function com(s){
    if(s>=0 & s<=1000){
        rate = 0.05*s
    }
    else if(s>1000 & s<2500){
        rate = 0.1*s
    }
    else if(s>2500){
        rate = 0.15*s
    }
    return rate
}

document.write(`The comission amount for Rs. ${s} sales is ${com(s)}`)