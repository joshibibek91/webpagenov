
x = parseInt(prompt(`Enter currency in NRS. : `))

function convert(x){

    currency = x/130

    return currency
}

document.write(`The equivalent currency for NRS. ${x} is USD. ${convert(x)}`)