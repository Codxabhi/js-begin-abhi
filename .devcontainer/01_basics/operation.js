//it is based on the type of data stored in the memory it is of types
//-premetive/reference and non-premetive/call by value


//premetive use stack   //non-premetive use heap


let value=45
let negvalue=-value
console.log(negvalue)
//adding the two string through (+) sign

let str1="hello"
let str2="world"
console.log(str1+str2)
//operations performed in the functions 
console.log(1+3)
console.log(1-4)

console.log("1"+45)
console.log(1+"23")
console.log("1"+"34")
console.log("1"+2+2)
console.log(1+"2"+2)
console.log(1+2+"2")
let num=45
num++
console.log(num)

let num6=10
++num
console.log(num6)

//comparison

console.log(1>2)
console.log(1<2)
console.log("1" > 4)
console.log(1 > "2")
console.log(null>0)
console.log(null<0)
console.log(null>=0)
console.log(undefined > 0)
console.log(undefined <0)
console.log(undefined>=0)
console.log(undefined==0)
console.log("6abs">"2abs")
console.log("4re"<7)
//primitive~ 7 types==string,number,boolean,null,undefined,symbol,bigint

//non primitive~ array,objects,functions

//javascript is of dynamic type
const score=130
const scorevalue=100    //number
console.log(score)

let scorevalue1="hello"
console.log(scorevalue1)  //string

let scorevalue2=true
console.log(scorevalue2)  //boolean

let scorevalue3=null
console.log(scorevalue3)  //null

let scorevalue4
console.log(scorevalue4)   //predefined

const scorevalue5=Symbol('123')
console.log(scorevalue5)    //symbol

const scorevalue6=Symbol('654')
console.log(scorevalue6)    //symbol


console.log(scorevalue5==scorevalue6)        //comparison between two
const bigNumber=2358284113528
console.log(bigNumber)        //BIGINT

const name=["abhi","hello","yellow","world","dear","maito kch bhi nhi"] 
//array name

let objective={
    name1:"helooworld",
    age: 12,                     //objects
    date:31/12/2001,

}











