

var n=prompt("Enter a number: ")



document.write(`<h2>The entered number is ${n}</h2>`)
var s=0;

for(i=2; i<=n; i++){

    if(n%i==0){
        s=s+1
    }
   }

if(n==1){
    document.write(`Entered number ${n} is Composite`)
}
else if(s>=2){
    document.write(`Entered number ${n} is Composite`)
}
 else {
    document.write(`Entered number ${n} is Prime`)

 }


