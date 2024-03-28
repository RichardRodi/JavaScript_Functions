
// Exercise 1 Section
console.log("EXERCISE 1 IsOdds:\n==========\n");
//## Exercise 1: Minimum Number

//- In the past, we created a selection statement inside a loop that counted from 1 to 100, and only printed out the odd numbers.
//- Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

//1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
//2. The function should take in one parameter named `count`
//3. The function body should:
   //- contain a `for loop` that counts to the parameter passed in,
  // - an `if/else` statement that determines if the current value is odd,
  // - and then `console.log()` the odd value to the console
//4. BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.

function isOdds(count)
{
    for (let i = 0; i <= count; i++ )
    {
        if (i % 2 != 0)
        console.log(`${i} is Odd:${i}`)
    }
        if (count < 0)
        console.log("Please put it in postive number!")
}

isOdds(-7);
isOdds(21);

console.log("EXERCISE 2 Legal?:\n==========\n");


//## Exercise 2: Legal?

//- Write a function that receives a name and age, and prints a greeting message to the console using the name.

//1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
//2. The function should take in two-parameters named userName & age
//3. The function body should:
  // - declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
   //- declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
   //- an `if/else` statement that determines if the `age` value is below 16,
   //- and then `console.log()` the correct message to the console.
//4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.


function checkAge(userName, age)
{
    let oldEnough = `Congrats ${userName}, You can drive!`;
    let notOldEnough = `Sorry ${userName}, You can't drive!`;
    
    if (age === undefined || userName === undefined || userName === "")
    {
        console.log("Not A Valid Input!")
    }

    else if (age >= 16)
    {
        console.log(oldEnough)
    }
    else if(age < 16)
    {
        console.log(notOldEnough)
    }
    
    else 
    {
        console.log("Not A Valid Input!")
    }
}

checkAge("Rich", 36);
checkAge("Steve", 12);
checkAge(42, "Allen");
checkAge(56);
checkAge("Dan")



console.log("EXERCISE 3 Which Quadrant:\n==========\n");

//## Exercise 3: Which Quadrant?

//Write a function that receives two parameters, x and y coordinates in
//the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis,
 //or what quadrant the point lies in.

 //For example:

 //- (0, 2) is on the x axis
 //- (1, 2) is in Quadrant 1
 //- (-6, 18) is in Quadrant 2

 function whichQuadrant(x, y)
 {
    if (x > 0 && y > 0 )
    {
    console.log("This is in Quadrant 1.")
    }
    if (x < 0 && y > 0)
    {
    console.log("This is in Quadrant 2.")
    }
    if (x < 0 && y < 0 )
    {
    console.log("This is in Quadrant 3.")
    }
    if (x > 0 && y < 0)
    {
    console.log("This is in Quadrant 4.")
    }
    if(x == 0 && y == 0)
    {
    console.log("This is centered.")
    }
    else if (x == 0)
    {
    console.log("This lies on the X Axis.")
    }
    else if (y == 0)
    console.log("This lies on the Y Axis.")
    
 }

 whichQuadrant(4,6)
 whichQuadrant(-4,6)
 whichQuadrant(-4,-6)
 whichQuadrant(4,-6)
 whichQuadrant(0,6)
 whichQuadrant(4,0)
 whichQuadrant(0,0) 

 console.log("EXERCISE 4 Which Triangle:\n==========\n");
//## Exercise 4: What type of triangle?

//Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three
//sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side),
// you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle
//the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

//For example:

//- Sides 1, 2, 2 make an isosceles triangle
//- Sides 1, 1, 2 make an invalid triangle


function whatTypeOfTriangle(side1, side2, side3)
{
    if (side1 + side2 < side3)
{
    console.log("This is not a valid triangle.")
}
if (side1 == side2 && side2 == side3)
{
    console.log("This is an equilateral triangle.")
}
else if (side1 + side2 > side3 && side1 == side2)
{
    console.log("This is an isosceles triangle.")
}
else if (side1 + side2 > side3 && side1 != side2)
{
    console.log("This is a scalene trianlge.")
}

}
whatTypeOfTriangle(1,2,5)
whatTypeOfTriangle(3,3,3)
whatTypeOfTriangle(2,2,3)
whatTypeOfTriangle(1,3,3)
whatTypeOfTriangle(1,2,4)

//## Exercise 5: Data Plan Status

//Write a function that will display feedback on cell phone data usage. Cell phone
//plans for this particular company give you a certain amount of data every 30 days
//which must be used or they are lost (no rollover). We want to track the average amount of data
 //used per day and inform the user if they are using too much data or can
//afford to use more.

//Write a function that accepts the following parameters:

//- `planLimit`: amount of data in the plan per 30 day period
//- `day`: the current day in the 30 day period
//- `usage`: the total amount of data used so far

//The function should compute whether the user is over, under, or right on the average
//daily usage under the plan. It should also inform them of how much data is left
//and how much, on average, they can use per day for the rest of the month. If
//they’ve run out of data, it should inform them of that too.

//For example, if the user enters `planLimit = 100`, `day = 15`, and `usage = 56`, your program should print
//out something similar to the following.

//```txt
//15 days used, 15 days remaining
//Average daily use: 3.333 GB/day
//You are EXCEEDING your average daily use (3.73 GB/day),
//continuing this high usage, you'll exceed your data plan by
//11.9 GB.
//To stay below your data plan, use no more than 2.93 GB/day.

console.log("EXERCISE 5 Data Plan:\n==========\n");

function dataPlanStatus(planLimit, days, usage)
{
    let totalDays = 30;
    let dailyUseSoFar = usage / days; 
    let averageDaily = planLimit / totalDays;  
    let daysLeft = totalDays - days; 
    let projectedUsage = dailyUseSoFar * daysLeft; 
    let excessUsage =  usage + projectedUsage - planLimit; 
    let remainingPlanLimit = planLimit - usage;
    console.log(`${days} Days Used. Days Remaining: ${daysLeft}`)
    console.log(`Average daily should use: ${averageDaily}GB`)
   
    if (averageDaily < dailyUseSoFar)
    {
        console.log(`You are EXCEEDING your average daily use! (${dailyUseSoFar}GB per Day)`)
        console.log(`Continuing this high usage, you'll exceed your data plan by: ${excessUsage}GB`)
        console.log (`To stay below your data plan use no more than: ${remainingPlanLimit / daysLeft}GB/Day`)
    }
    else
    {
        console.log ("Congrats you are below your data plan!")
    }
    if (planLimit === undefined || days=== undefined || usage === undefined)
    {
        console.log("Not A Valid Input!")
    }
}
console.log("Data PLan #1\n")
dataPlanStatus(100, 15, 56);
console.log("Data PLan #2\n")
dataPlanStatus(120, 5, 50);
console.log("Data PLan #3\n")
dataPlanStatus(100, 20, 40);
console.log("Data PLan #4\n")
dataPlanStatus(100, 12, 35);
console.log("Data PLan #5\n")
dataPlanStatus(100, 4, 56);
console.log("Data PLan #6\n")
dataPlanStatus(10,6);
console.log("Data PLan #7\n")
dataPlanStatus("Rich")

