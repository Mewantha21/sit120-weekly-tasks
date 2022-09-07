//week 3 past task 1
//text length
var aus = 'Welcome to Australia'
console.log(aus)
console.log('1. Text length :')
console.log(aus.length)

// Slice method
var aus1 = "Victoria, Queensland, New South Wales, Tasmania"
console.log(aus1)
console.log('2. Slice :')
console.log(aus1.slice(26))

//Substring
console.log(aus1)
console.log('3. Substring :')
console.log(aus1.substring(0,8))

//Replace
var aus2 = 'There are seven states in Australia'
console.log(aus2)
console.log('4. Replace :')
console.log(aus2.replace("seven", "six"))

//Upper Case
console.log(aus2)
console.log('5. Upperclass :')
console.log(aus2.toUpperCase())

//Concat
var aus3 = "Melbourne is the"
var aus4 = "busiest city in Australia"
console.log(aus3)
console.log(aus4)
console.log('6. Concat :')
console.log(aus3.concat(" ", aus4))



//week 3 past task 2
const cities = ["Melbourne", "Sydney", "Perth", "Brisbane"]
const values = [12, 30, 40, 55, 77, 88]
console.log('cities = ', cities)
console.log('values = ', values)

//Turn array to strings
console.log("1. Turn array to strings :")
console.log(cities.toString())

//Turn array to strings
console.log("2. Join Method :")
console.log(cities.join("|"))

//push method
console.log("3. Push Method :")
cities.push("Hobart")
console.log(cities)

//pop method
console.log("4. Pop Method :")
console.log(values.pop("|"))

//slice method
console.log("5. Slice Method :")
console.log(values.slice(2))