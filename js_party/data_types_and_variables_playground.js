/* To run the code in this file, run the command:
  node js_party/data_types_and_variables_playground.js
*/

console.log("data_types_and_variables_playground.js is running")

// PART 1: Declaring variables.  
// Be intentional when naming your variables.  Choose a name that is clear and specific about the data being held by that variable.
    // TIP - when printing to the console, put a label on your console log so it's easier to tell what you're seeing.
      // For example:  
      var helloWorld = 'hello world'
      console.log('helloWorld: ', helloWorld)

// 1a. Declare a variable and assign it a value of a string of your middle name. Then print it to the console.
      var middlename = "Edward"
      console.log(middlename)
// 1b. Declare a variable and assign it a value of the number of pets you have. Then print it to the console.
      var pets = 1
      console.log(pets)
// 1c. Declare a variable and assign it a value of null.  Then print it to the console.
      var nothing = null
      console.log(nothing)
// 1d. Declare a variable and assign it a value of whether you have ever gone bunjee jumping (true/false).  Then print it to the console. 
      var bungee = false
      console.log(bungee)
// 1e. Declare a variable and assign it a value of an empty string.  Then print it to the console.
      var blank = ""
      console.log(blank)
// 1f. Declare a variable and assign it a value of the expression 2 + 5.  Then print it to the console.
      var seven = 2 + 5
      console.log(seven)
// 1g. Declare a variable and assign it a value of the expression (100 - 20) / 2.  Then print it to the console.
      var forty = (100 -20) / 2
      console.log(forty)
// 1h. Declare a variable "potato" but do not assign it a value yet. Did you know you can do this? Print it to the console. What do you get?
      var potato =
      console.log(potato)
// 1i. Now, on a new line (not the line where you declared it) assign a string of your fav potato dish to your already-declared "potato" variable.  Print it to the console.
      var potato = "roasted potatoes"
      console.log(potato)
// 1j. Look at the console log below.  Notice that gobblyGoop has not been declared as a variable anywhere yet. Think about what will show in the console when you uncomment and run that line.  Try it! 
      // console.log(gobblyGoop)




// PART 2: Does naming matter?  (Hint - yes it sure does!)
// Clear, specific, consistent naming helps ensure you and other devs don't get confused. 
// Rename each of the variables below to be more clear and specific about the value(s) they hold.

// 2a.
var name = 'Jennifer'

// 2b.
var number_of_students = 15

// 2c. 
var candybar_types = ['snickers', 'twix', 'milky way', '3 musketeers']

// 2d.
var bicycle_attributes = {
  name: 'bicycle',
  numWheels: 2,
  goesFast: true,
  isBoring: false,
  parts: ['pedals', 'frame', 'handlebars', 'wheels', 'brakes']
}

// 2d. What's a better name than 'login' for a variable used to track if a user is logged in or not at any given time?
var logged_in = true  




// PART 3: Reassigning variable values
// When reassigning variables, you do not use the keyword "var"

// 3a. Declare a variable "userName" that holds a string of your first name.  Print it to the console.
    var userName = "Seth"
    console.log(userName)
// 3b. On a new line, reassign the value of your "userName" variable to be a friend's name.  Print it to the console again.  Notice how the 2 console logs give you a different value based on the variable's value at that moment
    var userName = "Jamiroquai"
    console.log(userName)
// 3c. 
var num1 = 3
console.log('num1: ', num1)
// Uncomment the variable "num1" Print it.

var num2 = num1 + 2
console.log('num2: ', num2)
// Uncomment the variable "num2". Print it.

console.log('num1 again: ', num1)
// Uncomment the console log above to print num1 again.  
    // Notice that the value hasn't changed even though we added 2 to it when declaring num2. Why?

// Declare another variable "num3" and assign it a value of num1 * num2.  Print it.
  var num3 = num1 * num2
  console.log('num3: ', num3)
// 3d. 
// Declare a variable "myNumber" and assign it a value of 0.  Print it.
  var myNumber = 0 
  console.log(myNumber)
// On a new line, reassign the myNumber variable to a value of myNumber + 2.  Print it again.
  // Notice how the value does change this time.  Why?
  myNumber = myNumber + 2
  console.log(myNumber)

// 3e. Look at the declaration and reassignments below.  Guess what will log each time and why.  Then uncomment them and run it.
    var counter = 0;
    console.log(counter)
    counter = counter + 1
    console.log(counter)
    counter += 1
    console.log(counter)
    counter ++
    console.log(counter)







// PART 7: More
// 7a. Declare a variable and assign it a value of an empty array.  Then print it to the console.
    var clear = []
    console.log(clear)
// 7b. Declare a variable and assign it a value of an empty object.  Then print it to the console.
    var car = {}
    console.log(car)
// 7c. Declare a variable and assign it a value of an array of 3 of your friends' names.  Then print it to the console.
    var names = ['Sinclair', 'Rockland', 'Billings']
    console.log(names)
// 7d. Declare a variable and assign it a value of a car object with 2 key-value pairs: make and model.  Then print it to the console.
    var car1 = { honda: "passport"}
    console.log(car1)