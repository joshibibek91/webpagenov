

x = parseInt(prompt("Enter any one number :"))

function oddeven(x){
    
      if (x%2==0){

        return "even";
    } 

    else{
        return "odd";
    }
}


n = oddeven(x)
document.write(`The entered number ${x} is ${n}`)