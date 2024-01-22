

var n=prompt("Enter the Number: ")

document.write(`<h2>I am calculating the divisors of number ${n}. They are as follows: </h2><br>`)

for(i=1; i<=n; i++){
    if(n%i==0){
        document.write(`${i}, `)
    }
}