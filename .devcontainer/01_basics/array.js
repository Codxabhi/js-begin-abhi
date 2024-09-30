//array
const value=[1,3,4]
console.log(value)
console.log(typeof(value))
console.log(value[0])//index
const name=["hdli","snksn","cnxznkv","ncxkabcb","ncnvn"]

console.log(name)
//array methods
name.unshift()
const marvel=["ironman","spiderman","thor"]
const dc=["superman","flah","dveq"]
const newhero = dc.concat(marvel)
console.log(newhero)
const myarr=[1,[2,3,[4,5]],6,0,[3,7,8]]
const myarr3=myarr.flat(Infinity)
//it is used to spread out the array if it is having an array inside an array
console.log(myarr3)
let score3=300
let score4=700
let score6=900
console.log(Array.of(score3,score4,score6))

arr5=["heello","name","cvac"]

console.log(arr5[0])

const myarr1=[1,23,365]
const myarr2=[7,4,876]
const result={...myarr1,...myarr2}
console.log(result)//through spread operator