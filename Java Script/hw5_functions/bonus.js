
s = prompt(`What is your present salary:`)
n = prompt(`What is your year of service: `)

function net(s, n){
    if(n>5){
        total = parseInt(0.05*s)
    }
    else{
        total = 0
    }
    return total

}

document.write(`The net bonus amount is Rs. ${net(s, n)}`)