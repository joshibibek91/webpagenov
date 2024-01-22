
n = prompt(`Enter the obtained marks: `)

function passmark(n){

    if (n>35){
        result = 'Passed'
    }
    else{
        result = 'Not Passed'
    }

    return result
}

msg = passmark(n)
document.write(`You are ${msg} with ${n} marks`)