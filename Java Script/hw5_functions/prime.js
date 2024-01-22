var n=prompt("Enter a number: ")

document.write(`<h2>The entered number is ${n}</h2>`)
var s=0;


function prime(n){
        for(i=2; i<=n; i++){
    

        if(n%i==0){
            s=s+1
        }
    }

    if(n==1){
        return 'composite'

        
    }
    else if(s>=2){
        return 'composite'
        
    }
    else {
        return 'prime'
        
    }
}

document.write(`The given number is ${prime(n)}`)
