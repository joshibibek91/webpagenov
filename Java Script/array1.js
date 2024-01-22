// n = ['ram', 'hari', 'gopal']
// l=n.length
// for(i=0; i<l; i++){
//     console.log(n[i])
// }

student=[

{
    roll: '1',
    names: 'ram',
    address: "Ktm",
    mobile: "9843655"
},

{
    roll: '2',
    names: 'hari',
    address: "Bkt",
    mobile: "9802"
},
{
    roll: '1',
    names: 'Krish',
    address: "Llt",
    mobile: "953"
}
]

l=student.length;
for(i=0;i<l;i++){
    document.write(`${student[i].roll}  ${student[i].address} <br>`)
}