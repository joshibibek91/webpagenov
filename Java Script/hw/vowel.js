
var c = prompt(" Enter the Character:")



document.write(`<h2> Enter the character: ${c}</h2><br>`)

if (c === 'a' || c==='e' || c==='i' || c==='o' || c==='u')
{

    document.write(`<h2> ${c} is a vowel</h2> <br>`)
} 

else{
    document.write(`<h2> ${c} is a consonant</h2> <br>`)

}