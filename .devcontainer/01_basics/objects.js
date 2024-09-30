//objects using singleton or through lateral
const symb=Symbol("20")
const  user=
{
    name: "abhi",
  address: "luckniw",
  [symb]:"20",
  age:19,
  email: "abhi12@gmail.com",
  phone_umber: 1123234,

}
console.log(user)
//how to declare a symbol

console.log(user[symb])
user.email="sadsaff@gmail.com"//used to change the email
console.log(user)


//used to freeze the whole object 
user.email="abhsadiu433@gmail.com"
console.log(user)
//greeting 

user.greeting= function()
{

    return "hello my name is " +  this.name
}
console.log(user.greeting())

//through constructor

const username={}
console.log(username)
username.id="123abc"
username.name="abhi"
username.isLoggedIn=false
//console.log(username)
const myuser={
  name:"abhoi",
  email:"abhui@gmail.com",
  phonenumebr:2131242314123,
  address:"124123asdFfa",
  fullname:{
    myname:{
        firstname:"abhi",
        lastname:"safsdf",
    }
  }

}
console.log(myuser)

const obj1={
    firstname:"tejasv",
    midname:"pratap",
    lastname:"singh",


}
const obj2=
{
    pincode:242323,
    colonynu:2142,
    address:"alhabadnagri",
}
const obj3=Object.assign(obj1,obj2)//assign method
console.log(obj3)



//through spread operator

const obj5={
    firstname:"tejasv",
    midname:"pratap",
    lastname:"singh",


}
const obj6={
    pincode:242323,
    colonynu:2142,
    address:"alhabadnagri",
}

const result = { ...obj5, ...obj6}
console.log(result)

//if we need to print only one value at a time
//

// functions

const course=
{
    name:"CSS",
    salay:5000,
    age:19,

}
console.log(course)
// console.log(course.salay)
// {
//     //jason it is called jason as we are not assigning any of the 
//     //in jason the value and the assigning both should be in the string format
//     like:
//     "name" : "abhijeetpr" //example 
// }
//jasonformat//
