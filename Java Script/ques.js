// WAP in JS to ask any number and make a multiplication table of it 




var n = prompt(" Enter the number:")



document.write(`<h2> I will make the multiplication table of the entered number: ${n}</h2><br>`)

var i=1;

for(var i=1; i<=10;i++){
    var m=n*i;
    
    document.write(`${n} x ${i} = ${m} <br>`)
}