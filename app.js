// --------------------(Chapter 21 Changing Case)------------------------

//                           Exerxise no 1

// var a = "haris";

// a = a.toLowerCase();
// console.log(a);

//                           Exerxise no 2

// var x = "PAKISTAN";
// x = x.toLowerCase();

// console.log(x);

//                           Exerxise no 3

// var z = "pakistan";
// z = z.toUpperCase();

// console.log(z);

//                          Exerxise no 4

// var a = "THIS WILL BE IN LOWER CASE";
// var b = a.toLowerCase();

// console.log(b);

//                          Exerxise no 5

// var f = ["THIS WILL BE IN LOWER CASE IN ARRAY"];
// var g = f[0].toLowerCase();

// console.log(d);

//                          Exerxise no 6

// var h = " what is your name";

// alert(h.toUpperCase());

//                           Exerxise no 7

// var a = "kaRacHi";
// var b = a.slice(0, 1).toUpperCase();
// var s = a.slice(1).toLowerCase();
// console.log(b + s);


//--------------------------Chapter 22 - 25 (Strings)


//                            Exercise no 1

// var s = "captain";
// s = s.slice(1, 3);

// console.log(s);

//                            Exercise no 2

// var r = "Karachi";
// var C = r.length;

// console.log(C);

//                           Exercise no 3

// var l = "elephant";
// var i = l.slice(2, 6);

// console.log(i);

//                             Exercise no 4

// var c = "Pakistan";
// var n = char1.length;

// console.log(n);

//                            Exercise no 5

// var firstVar = "Karachi";
// var slicedVar1 = firstVar.slice(0, 1);
// var slicedVar2 = firstVar.slice(4);

// var plusSliced = slicedVar1 + slicedVar2;

// console.log(plusSliced);

//                           Exercise no 6

// var t = "To be going to be.";
// var x = t.indexOf("be");

// console.log(x);

//                           Exercise no 7

// var t2 = "To be or going to be.";
// var x = text2.lastIndexOf("be");

// console.log(x);

//                          

//                             Exercise no 9

// var str = ["Apple", "Orange", "Banana"];
// var check = str.indexOf("Orange");
// if (check > -1) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//                            Exercise no 10

// var alphabets = "abcde";
// alphabets = alphabets.charAt(2);

// console.log(alphabets);



//                            Exercise no 11

// var ha = "abcdefghihkl";
// var har = ha.charAt(10);

// console.log(har);

//                            Exercise no 12

// var alphabet = "abcdefghijklmnopqrst";

// var lar = alphabet.charAt(alphabet.length - 1);

// console.log(lar);

//                            Exercise no 13

// var input = "abcdefghijklmnopqrst";

// var a = input.charAt(4);

// console.log(a);

//                            Exercise no 14

// var alphabet = "haris";
// var c = alphabet.charAt(3);

// if (alphabet.charAt(3) == c) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//                            Exercise no 15

// var ame = "haris";

// for (var i = 0; i < ame.length; i++) {
//     var loops = [];
//   loops[0] = ame[i];
//   console.log(loops);
// }

// var me = "haris";
// var loops = [];

// for (var i = 0; i < me.length; i++) {
//   loops[i] = me[i];
//   console.log(loops);
// }

// var abc = "abc";
// var a = [];
// a[0] = avc[i];

//                              Exercise no 16

// var y = "no";
// var r = y.replace("no", "yes");

// console.log(r);


//                             Exercise no 17 

// var y = x.replaceAll("a", "z");



//--------------------------Chapter 27 (Random Numbers)-------------------

//                           Exercise no 1

//  var r = Math.random();
// var c = Math.floor(r * 50) + 1;

// console.log(c);

//                           Exercise no 2 

// var r = Math.random();
// console.log(r);

//                           Exercise no 3

// var dl = Math.floor(Math.random() * 6) + 1;
// console.log(d);

//                           Exercise no 4 

// var s = Math.random();
// var t = s < 0.5 ? "heads" : "tails";

// console.log(t);


//---------------------Chapter 28, 29 (Converting Strings)---------------

//                         Exercise no 1

// var a = "42";
// var u = parseInt(a);

// console.log(u); 
                         
//                         Exercise no 2

// function abc(me) {
//     var b = parseInt(me);
//     return b;
//   } 
//   var e = "123";
//   var o = abc(e);

//   console.log(o); 
  
//                         Exercise no 3

// var o = "3.14";
// var n = parseFloat(o);

// console.log(n);

//                         Exercise no 4

// function abc(you) {
//     return !isNaN(you);
//   } 
//   var x = "123";
//   var y = abc(x);
  
//   console.log(y); 
  
//                         Exercise no 5

// var r = 42;
// var u = r.toString();

// console.log(u); 

//                         Exercise no 6

// function f(u) {
//     var e = u.toString();
//     return e;
//   }  
//   var num = 42;
//   var f = f(num);
  
//   console.log(f); 
  
 


//----------------------Chapter 30 (Controlling the length of decimals)------------


//                           Exercise no 1

// var num = 3.14159265359;
// var newNum = Number(num.toFixed(4)).toString();

// console.log(newNum); 

//                           Exercise no 2

// var num = 3.14159265359;
// num = Number(num.toFixed(2));

// console.log(num); 

//                           Exercise no 3

// var num = 3.14159265359;
// if (num.toFixed(2).toString().length > 4) {
// } else {
//   console.log("Number has 4 characters or fewer");
// }

//                           Exercise no 4

// var num = 3.14159265359;

// var r = num.toFixed(2).toString();
// alert(r);


//-----------------------Chapter 31 - 34 (Date & Time)------------------

 //                           Exercise no 1

// var dObj = new Date();

 //                           Exercise no 2

// var dStr = new Date().toString();

  //                          Exercise no 3

//var day = d.getDay();

 //                           Exercise no 4

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[d]);

 //                           Exercise no 5
// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();

 //                           Exercise no 6
//  var later = new Date(2020, 11, 0);

 //                           Exercise no 7
 //var dateObj = new Date(1992, 1, 2);

 //                           Exercise no 8
 //alert(new Date(1980, 0, 1).getTime());

 //                           Exercise no 9
//  var dateObj = new Date(); 

//  dateObj.setFullYear(2023);
 
//  console.log(dateObj); 
 
//--------------------------Chapter 35 - 37 (Functions)--------------

//                           Exercise no 1

// function displayAlert() {
//     alert("This is Function Alert");
//   }
//   displayAlert();
  
//                          Exercise no 2
  
//   function Name() {
//     var ame = prompt("Enter name");
//     console.log(ame);
//   }
// Name();
  
//                          Exercise no 3
  
//   function TwoFunctions() {
//     firstFunction();
  
//     secondFunction();
//   }
  
//                          Exercise no 4
  
//   function a() {
//     alert(prompt("Enter name"));
//   }
//   a();
  
//                           Exercise no 5
  
//   var v = 42;
//   var w = "Hello";
//   var q = 7;
  
//   function c(a, b, c) {
//     console.log(v, w, q);
//   }
  
//   c(ve, w, q);
  


  
//                           Exercise no 7
  
//   function mul(abc1, abc2, abc3) {
//     var result = abc1 *  abc2 *  abc3;
//     console.log("Mul result: " + result);
//   }
  
//   mul(2, 3, 4);
  
//                           Exercise no 8
  
//   var numbers = [4, 7, 10, 15, 2];
//   var average = cal(numbers);
  
//   function Average(numbers) {
//     var sum = 0;
//     var count = numbers.length;
  
//     for (var i = 0; i < count; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / count;
//     return average;
//   }
//   console.log(average);
   
//                           Exercise no 9
  
//   function cal(abc1, abc2) { 
//     var sum =abc1 + abc2 ;
//     return sum;
//   }
  
//   var t = cal(9, 6);
//   console.log(t);
  
//                           Exercise no 10
  
  // Same Question no 8
  
//                           Exercise no 11
  
//   function cal(abc1, abc2) {
//     var d = abc1 + abc2;
//     return d;
//   }
  
//   var t = cal(9, 6);
//   console.log(t);
  
//                           
  


//                           Exercise no 14
  
//   function calAge(dOB) {
//     var today = new Date();
//     var bd = new Date(dOB);
  
//     var age = today.getFullYear() - bd.getFullYear();
//     var month = today.getMonth() - bd.getMonth();
//     var dayD = today.getDate() - bd.getDate();
  
//     if (month < 0 || (month === 0 && day < 0)) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var dOB = "1999-08-07";
//   var age = calAge(dOB);
//   console.log("Age: " + age);

//                           Exercise no 15
  
//   var arr = [
//     "talha",
//     "haris",
//     "khurram",
//     "wajahat",
//     "ilyas",
//      "zehra",
//   ];
//   var a = "haris";
//   function abc(me, arr) {
//     return array.includes(me);
//   }
//   var i = abc(a, arr);
//   console.log(i);
  
//   // Exercise no 16
  
//   function r(letter, times) {
//     return letter.repeat(times);
//   }
  
//   var letter = "abcd";
//   var r= r(letter, 10);
//   console.log(r);
  
//   // Exercise no 17
  
//   function reverseArr(arr) {
//     return arr.reverse();
//   }
  
//   var array = ["a", "b", "c", "d", "e"];
//   var reversedArr = reverseArr(array);
//   console.log(reversedArr)


 //-----------------------(Chapter 38 Local vs. Global Variables)---------------

// Exercise no 1

// function Sum() {
//   var t = r1 + r2;

  //These are local Variables
// }

// Exercise no 2

// var globalVar = "this is global var";

// function a() {
//   console.log(globalVar);
// }

// a();

// ---------------------(Chapter 39-40 Switch Statements)-----------------

                              // Exercise no 1

// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log(" Apple");
//     break;
//   case "banana":
//     console.log(" Banana");
//     break;
//   case "orange":
//     console.log(" Orange");
//     break;
//   default:
//     console.log(" Unknown");
//     break;
// }

//                   Exercise no 2

// var cityName = prompt("Enter a city name:");
// var message;

// switch (cityName) {
//   case "Karachi":
//     message = " Karachi!";
//     alert(message);
//     break;
//   case "Lahore":
//     message = " Lahore!";
//     alert(message);
//     break;
//   case "Islamabad":
//     message = " Islamabad!";
//     alert(message);
//     break;
//   default:
//     message = "City not recognized!";
//     alert(message);
//     break;
// }