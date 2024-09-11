/*
//string
const firstname="maihoon"
const secondname="bhoot"

console.log((firstname) + (secondname))
//stringinterpolation nhi kara ya 
//backtricks(`)

let str1="abhi"     //doule quote 
let string2='helo'          //single quote string
console.log(string2)
let string3=`heloworld`   //backtricks

//string methods

let name="abhi"
console.log(name.length)      //length~to find the number of character

console.log(name[0])    //indexing

let str3="hello"
let str4="world"
let str5=str3+str4       //concatenation(+)

console.log(str5)       

let name1='abhijeet pratap' 
console.log(name1.indexOf('pratap'))  //tells about the where the number at

const name2= name1.substring(0,4)
console.log(name2)

const name3=name1.slice(-4,10)
console.log(name3)

const name4="    hello    "
console.log(name4)
console.log(name4.trim)   //function

*/

let name='johm'
console.log(name)
let name1=" mbsdmvbMSBDJVB abhijeet"
console.log(name1)
console.log(name1.length)
console.log(name1[1])
console.log(name1.charAt(2))
console.log(name1.indexOf(1,6))
console.log(name +' ' + name1)
console.log(name1.indexOf('abhijeet'))
console.log(name1.lastIndexOf('mbsdmvbMSBDJVB '))
console.log(name1.includes('dnvkadnva'))
console.log(name1.startsWith('abhi'))
console.log(name1.endsWith('njvbqjabdv'))
//manipulation methods
console.log(name1.toLowerCase('hello'))
console.log(name1.toUpperCase('hello'))
//trim is used for removing the gap between the space

console.log(name1.trim())

//number
let score1=4009
console.log(typeof(score1))
console.log(score1)
//most of time we will used the to fixed value 
console.log(score1.toFixed(2))
const value24=44.009
console.log(value24.toFixed(2))
const value25=1000003243
console.log(value24.toPrecision(2))
console.log(value25.toLocaleString())

