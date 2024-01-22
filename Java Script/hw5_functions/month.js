
x = prompt(`Enter a number between 1 and 12:`)

function month(x){

    if(x==1){
        msg = 'Baisakh'
    }
    else if(x==2){
        msg = 'Jestha'
    }
    else if(x==3){
        msg = 'Ashad'
    }
    else if(x==4){
        msg = 'Shrawan'
    }
    else if(x==5){
        msg = 'Bhadra'
    }
    else if(x==6){
        msg = 'Ashoj'
    }
    else if(x==7){
        msg = 'Kartik'
    }
    else if(x==8){
        msg = 'Mangshir'
    }
    else if(x==9){
        msg = 'Poush'
    }
    else if(x==10){
        msg = 'Magh'
    }
    else if(x==11){
        msg = 'Falgun'
    }
    else {
        msg = 'Chaitra'
    }

    return msg
}

document.write(`The Month corresponding to the given number is ${month(x)}`)

