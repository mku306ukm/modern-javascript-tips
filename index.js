
/*

console.log("Useful Modern JavaScript Tips")
//===1===
//Conditionally add properties💡 in the object

const isValid = true
const age = 18

//we can use spread operator (...) add properties in objects

const person = {
    id: '132',
    name: 'umesh',
    ...(isValid && {isActive: true}),//(true && {isActive:true})
    ...((age >= 18 || isValid) && { cart: "i am best in coding" }) // (true && {cart:0})
}
console.log('person----',person)

//===2===
//Check if a property exists in an object or not

//we can use (in) keyword to check property exists in object
const person1 = {
    id: '123',
    name: 'kumar',
}
console.log('name' in person1);
console.log('subject' in person1);

//===3===
//Object destructing with dynamic key

//we can also give alias name of variable when destructing
const productData = {id: '23', name: 'Laptop', language: 'javascript'}
const {name: deviceName} = productData

console.log('deviceName', deviceName)//deviceName Laptop

//here destructing value with dynamic key
const extractKey = 'language'
const {[extractKey]: data} = productData

console.log('data', data) // data javascript



//===4===
//Loop over an object to access both key and value

//we access both key and value using object entries method
const data1 = {id: 1, name: 'Laptop', Sale: false}

Object.entries(data1).forEach(([key, value]) => {
if (['id', 'name', 'Sale'].includes(key)){
    console.log('key:', key, 'value:', value)
}
})


//===5===
//Prevent throwing an error 🐞 when accessing any key which does not exist in the object using optional chaining (?.)

const data = {id: '1345', isActive: true}
console.log('data', data.name)
//when using ?
console.log('data', data?.name)
//deep optional chaining
console.log('data', data?.name?.user)
//with function optional chaining
console.log('data', data?.isActiveDisplay?.())



//===6===
// Check falsy🌵 values in an array

//we can use 'Boolean' method to test truthy value
const fruitList = ['apple', null, 'mango', undefined, '', 'pineapple']
//filter falshy values
const filterFruitList = fruitList.filter(Boolean)
console.log(filterFruitList) 

//check if any truthy value in array
const isAnyFruit = fruitList.some(Boolean)
console.log(isAnyFruit)




//===7===
//Remove duplicate value in the array

//we can remove duplicate value using 'Set'
const fruitList = ['apple', 'mango', 'apple', 'grapes', 'mango', 'orange']
const uniqFruitList = [...new Set(fruitList)]
console.log(uniqFruitList) 



//===8===
//Check value is an array type

 const fruitList = ['apple', 'mango']
console.log(typeof fruitList)
console.log(Array.isArray(fruitList))



//===9===
//String to Number and Number to String conversion using ‘ + ’ operator 

//we can convert string to number using '+' operator
const personNo = '1234567'
console.log('personNo:', +personNo, 'typeOf', typeof +personNo)

//we can convert number to string using + operator followed by empty string
const personId = 98765
console.log('personId:', personId + '', 'typeOf', typeof(personId + '')) 

*/

//===10
//10. Conditionally assign other values when value is null and undefined using nullish coalescing (??) Operator
let data = undefined ?? 'noData'
console.log(data)

data = null ?? 'noData'
console.log(data)

data = '' ?? 'noData'
console.log(data)

data = 0 ?? null ?? 'noData'
console.log(data)

//when we assign value based on itself value it is "Shorthand" way
data ??= 'noData'
console.log(data)