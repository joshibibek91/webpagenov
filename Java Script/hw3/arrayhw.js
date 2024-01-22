
var n=[]
var sum=0
var a=0
var s=Number.POSITIVE_INFINITY
var c=0
var d=0



for(i=0; i<10; i++){
    n[i]=prompt(`please enter positive integer ${i+1}:`)
    
    if(parseInt(n[i])>a){
        a=parseInt(n[i])
    }
    if(parseInt(n[i])<s){
        s=parseInt(n[i])
    }
    if(parseInt(n[i])%2==0){

        c=c+1
    }
    else{
        d=d+1
    }
        
    sum=sum+ parseInt(n[i]);
}

avg=sum/10;
document.write(`Sum of the numbers is ${sum} <br>`)
document.write(`Average is ${avg} <br>`)
document.write(`Largest num is ${a}<br>`)
document.write(`Smallest num is ${s}<br>`)
document.write(`Total Even count is ${c}<br>`)
document.write(`Total Odd count ${d}`)