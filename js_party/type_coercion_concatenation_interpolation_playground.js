/* To run the code in this file, run the command:
      node js_party/type_coercion_concatenation_interpolation_playground.js
*/

console.log("type_coercion_concatenation_interpolation_playground.js is running")

// PART 1: Type Coercion

// 1a. Look at the variable declarations and assignments below.  Guess what will log for creatureCount.  Uncomment and run it.
        var quantity = 3;
        var mythicalCreature = " unicorns";
        var creatureCount = quantity + mythicalCreature;
        console.log(creatureCount)

// 1b. In the example above, what is the data type of the quantity variable?
// 1c. In the example above, what is the data type of the mythicalCreature variable?
// 1d. In the example above, what is the data type of the creatureCount variable?  
//     How can a number plus a string equal a string?
//     Take a few minutes to look up and read about Type Coercion in the MDN docs.




// PART 2: Concatenation
  var brag = "I have " + quantity + " fancy" + mythicalCreature +"!"
  console.log(brag)

// 2a. Ensure the quantity, mythicalCreature, and brag variables above are not commented out.  Click Run.

// 2b. The value of brag above is being created using concatenation. A way to link multiple values (strings, numbers, variables, etc) together into one string using the + operator.  Let's try it!
   // Declare a variable and assign it a string value of a friend's name.
   // Declare a variable and assign it a string value of a nice gesture.
   // Declare a variable "gratitude" and assign it a statement of thanks that uses concatenation and your other 2 variables.  For example:  "Thank you Kayla for pointing out the food in my teeth."
      var friend = "Grampton "
      var gesture = "helping me move"
      var gratitude = "Thank you "
      var appreciation = gratitude + friend + "for " + gesture + "!"
      console.log(appreciation)
// 2c. Use the variables below to make a concatenated string.
      var activity = 'talk'
      var estrangedUncle = 'Bruno'
      var concstring = friend + "you can " + activity + " to " + estrangedUncle + " at " + quantity + " about your" + mythicalCreature +" " + gesture
      console.log(concstring)


// PART 3: Interpolation
  var bigBrag = `I have ${quantity} VERY fancy and sophisticated${mythicalCreature}!`  
        //Note the weird spacing between sophisticated and mythicalCreature above due to how we already included a space in the mythicalCreature value previously.

// 3a. Ensure the quantity, mythicalCreature, and bigBrag variables above are not commented out. Click Run.
      console.log(bigBrag)
// 3b. The bigBrag variable above uses a different way of combining values called interpolation. It accomplishes the same goal as concatenation but uses different syntax - backticks instead of quotes(``) and these guys ${}.  Let's try it!
     // Declare a variable and assign it a string value of a name.
     // Declare a variable and assign it a string value of a celebratory exclamation ("congrats", "woohoo", etc)
     // Declare a variable and assign it to a string value of a nice characteristic ("cute", "nice", etc)
     // Declare a variable "babyNote" and assign it a statement of new baby congratulations that uses interpolation and your other 3 variables.  For example: "Congratulations Trisha! I heard your new baby is adorable!"
      var stranger = "Wanda"
      var celebration1 = "Yeaaaah"
      var characteristic = "pleasant"
      var babyNote = `${celebration} ${stranger}! I was told your new baby is ${characteristic}!`
      console.log(babyNote)
// 3c. Use the variables below to make an interpolated string.
      var celebration = 'birthday'
      var age = 25
      var intstring = `${celebration1} ${friend}! You and ${stranger} will have a ${characteristic} time celebrating ${celebration} number ${age} with ${estrangedUncle}!!!`
      console.log(intstring)
