


var n = prompt(" What is your sales amount for today")
var c1=n*0.05;
var c2=n*0.1;
var c3=n*0.15



document.write(`<h2> The sales amount for today is Rs. ${n}</h2><br>`)

if (n<=1000){

            document.write(`<h2> Your comission for Today is Rs. ${c1} <br>`)
} 

else if(n>1000 & n<=2500) {
    document.write(`<h2> Your Today's comission is ${c2}</h2> <br>`)

}


else if(n>2500) {
    document.write(`<h2>Your Today's comission is ${c3}</h2> <br>`)

}