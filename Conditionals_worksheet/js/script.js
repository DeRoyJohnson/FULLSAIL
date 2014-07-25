alert("This is in the js file");
//DeRoy Johnson, July 23, 2014, Conditionals Worksheet

//Group 1, Last Chance for Gas!

var CarMpg = 32; //Miles per gallon
var GasTankLevel = 80; //Gas tank reading in percentage
var GasTankCapacity = 16; //Gas tank capacity in gallons
var decision; //The decision based all three variables to calculate if a 200 mile trip with no stoppage is possible.

//If the gas tank capacity is 16 gallons, the car miles per gallon is over 21, and the gas tank level being over 60%, they can make it; otherwise they have to stop.
//If code is false, the second statement after the colon will show
decision = (CarMpg > 21 && GasTankCapacity == 16 && GasTankLevel > 60) ? "Yes, you can make it without stopping for gas!" : "You only have X gallons of gas in your tank, better get gas now while you can!";
console.log(decision);


//Group 2, Grade Letter Calculator

var ClassGrade = 75; //Class grade at the conclusion of the courese


//If the class grade is higher than an 72 but lower than an 80, the student's grade is an C
if(ClassGrade > 72 && ClassGrade < 80){
	console.log("You have a 75%, which means you have earned a C in the class!")
}


//Group 3, Movie Ticket Price

var MovieTime = 16; //Move time is 16:00 which is 4pm
var CustomerAge = 23; //Customer's age

//If you are senior over the age of 55 or under the age of 10 you are eligible for $7.00 discount. In addition, if you are seeing a movie between the times of 3pm and 5pm you are also eligible for the discount.
if(MovieTime > 14 && MovieTime < 18 || CustomerAge > 55 && CustomerAge < 10){
	console.log("The ticket price is $5.00")
}