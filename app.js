// ********** | CHAPTER 31-34: DATE METHODS | **********

// var date = new Date()
// document.write(date)

// var date = new Date()
// console.log (date)
// var dateS = date.toString()
// console.log (dateS)
// var show = dateS.slice (4, 7)
// alert (show)
// var day = dateS.slice (0, 4)
// alert (day)

// var date = new Date()
// console.log (date)
// var dateS = date.toString()
// console.log (dateS)
// var day = dateS.slice (0, 4)
// console.log (day)
// if ( === "Tue" || day === "Sat") {
//    console.log ("Its a FUN day")
// }

// var date = new Date()
// document.write(date)
// var day = date.getDay()
// console.log (day)
// if (day <= 15) {
//     alert ("First fifteen days of the month")
// } else {
//     alert ("Last days of the month")
// }

// var date = new Date()
// console.log(date)
// var sec = date.getTime()
// console.log(sec)
// document.write("Current Time: " + date + "<br>" + "Second from 1970: " +
//     sec + "<br>" + "Minutes from 1970: " + sec / (1000 * 60))

// var date = new Date()
// console.log(date)
// var hour = date.getHours()
// console.log (hour)
// if (hour <= 12) {
//     alert ("Its AM")
// } else {
//     alert ("Its PM")
// }

// var date = new Date("jan 30, 2025")
// console.log(date)

// var date = new Date("jan 30, 2025")
// console.log(date)
// var cur = new Date()
// console.log (cur)
// var time = date.getTime()
// console.log (time)
// var curM = cur.getTime()
// console.log (curM)
// var days = (time - curM)/(1000*60*60*24)
// var days = Math.ceil(days)
// document.write ("Days left: " + days)

// var date = new Date("jan 19, 1921")
// console.log(date)

// var a = prompt ("Enter you birth year")
// var b = new Date()
// var c = b.getFullYear()
// var d = c - a
// alert ("Your age is " + d)

// var name = prompt("Enter custumer name");
// var id = +prompt("Enter custumer id", "2021");
// var month = prompt("Enter month");
// var numberOfUnits = 410;
// var perunit = 16;
// var netAmount = numberOfUnits * perunit;
// var lateFee = 360;
// document.write("<h1> K-ELECTRIC BILL </h1> <br> <br>" + 
//     "Custumer Name: " + name + "<br>" +
//     "Custumer ID: " + id + "<br>" +
//     "Month: " + month + "<br>" +
//     "Number of Units: " + numberOfUnits + "<br>" +
//     "Charges per unit: " + perunit + "<br>" +
//     "Net Amount Payable: " + netAmount + "<br>" +
//     "After Due Date: " + netAmount + lateFee + "<br>"
// )


// ********** | CHAPTER 35-38: FUNCTION | **********

// function add() {
//     var date = new Date()
//     alert (date)
// }
// add()

// function greet() {
//     var name = prompt("Enter Your Name")
//     alert ("Hello " + name + ". How are you?")
// }
// greet()

// function add() {
//     var a = +prompt ("Enter first number")
//     var b = +prompt ("Enter second number")
//     var c = a+b
//     alert ("The sum of " + a + " and " + b + " = " + c)
// }
// add()

// function user() {
//     var first = +prompt("Enter first number")
//     var second = +prompt("Enter second number")
//     var opr = prompt("Operation (+, -, *, /, %)")
//     if (opr === "+") {
//         alert(first + second)
//     } else if (opr === "-") {
//         alert(first - second)
//     } else if (opr === "*") {
//         alert(first * second)
//     } else if (opr === "/") {
//         alert(first / second)
//     } else if (opr === "%") {
//         alert(first % second)
//     }
// }
// user()

// function square(num) {
//     alert (num*num)
// }
// var user = prompt ("write a number to make square")
// square(user)

// function count(start, end) {
//     for (i = start; i <= end; i++) {
//         document.write(i + "<br>")
//     }
// }
// var first = +prompt("Enter first number")
// var last = +prompt("Enter last number")
// count(first, last)

// function hypo(){
//     var per = +prompt ("Enter Perpendicular of the Triangle.")
//     var base = +prompt ("Enter Base of the Triangle.")
//     var perBase = (per*per) + (base*base)
//     var sqrt = Math.sqrt(perBase)
//     alert ("Hypotenius = " + sqrt)
// }
// hypo()

// function area(width, hight) {
//     alert ("Area of the Rectangle is " + width*hight)
// }
// var wid = prompt("Enter width of the rectangle")
// var hig = prompt("Enter hight of the rectangle")
// area(wid, hig)

// function count(a, b) {
//     document.write (a)
//     alert (b)
// }
// var c = "Hello World"
// var d = c.length
// count(c, d)

// var redius = +prompt("Enter radius of the circle")
// function circumference() {
//     alert ("Circumference of the circle is " + 2 * 3.142 * redius)
// }
// function area() {
//     alert ("Area of the circle is " + 3.142 * (redius*redius))
// }
// circumference()
// area()


// ********** | CHAPTER 35-42: FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  | **********

// function add(a, b) {
//     alert(a + " + " + b + " = " + a+b)
// }
// add(5, 7)

// var a = +prompt("Enter 1st side length")
// var b = +prompt("Enter 2st side length")
// var c = +prompt("Enter 3st side length")
// function side() {
//     return (a+b+c)/2
// }
// var s = side()
// function tri() {
//     var area = s*(s+a)*(s+b)*(s+c)/2
//     alert("Area of the triangle is " + area)
// }
// tri()

// function main() {
//     function sub1() {
//         var subj1 = +prompt("Enter 1st subject number")
//         return subj1;
//     }
//     function sub2() {
//         var subj2 = +prompt("Enter 2nd subject number")
//         return subj2;
//     }
//     function sub3() {
//         var subj3 = +prompt("Enter 3rd subject number")
//         return subj3;
//     }
//     var total = 300
//     var a = sub1()
//     var b = sub2()
//     var c = sub3()
//     var percentage = (a+b+c)/total * 100
//     var average = (a+b+c)/3
//     alert ("Percentage: " + percentage + "%")
//     alert ("average number: " + average)
// }
// main()



