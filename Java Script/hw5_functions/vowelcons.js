
c = prompt(`Enter any character: `)

function vowelcons(c){
    if(c=='a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
        msg = "Vowel"
    }
    else{
        msg = "Consonant"
    }
    return msg
}

result = vowelcons(c)
document.write(`The entered character is ${result}`)