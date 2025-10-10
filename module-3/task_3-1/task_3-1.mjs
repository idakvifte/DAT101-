"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
// Part 1
let wakeUpTime = 7; //prøv med 6,7 eller 8

if (wakeUpTime === 7) { 
  printOut ("if i wake up at exactely 7 o clock then I can catch the bus to school.");
   }
printOut (newLine);

// part 2
wakeUpTime=6; //prøv med 6,7 eller 8

if (wakeUpTime === 7) {
  printOut ("If I wake up at exactly 7 o'clock, I can take the bus to school.");
   } else { 
    printOut ("Otherwise I have to take the car to school.");
     }
      printOut (newLine) ;


// Part 3
wakeUpTime=8; //prøv med 7 eller 8

if (wakeUpTime === 7) {
  printOut ("If I wake uo exactly at 7 o'clock, I can take the bus to school.");
   }else if (wakeUpTime ===8) { 
    printOut ("If I wake up at exactly 8 o'clock, I can take the train to school.");
 } else { 
  printOut ("otherwise I have to take the car to school."); 
   }
   printOut (newLine);      

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
// part 4
let number = -3; // prøv med forskjellige tall

if (number >=0) { 
  printOut ("Positive");
   }else { 
    printOut ("Negative");
     }
printOut(newLine); 

printOut ("--Part 5----------------------------------------------------------------------------------------------- ");
//Part 5
number = 0; //Prøv med -3, 0, 5

if (number > 0){
  printOut ("Positive");
   } else if (number < 0) {
    printOut ("Negative"); 
     } else { 
     printOut ("Zero"); 
     } 
     printOut (newLine); 


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Generer et tilfeldig tall mellom 1 og 8
let imageSize = Math.floor(Math.random()* 8) +1;
printOut ("Uploaded image Size: " + imageSize + "MP");

//Sjekk om bildet er stort nok
if (imageSize >=4) { 
  printOut ("Thank you");
   } else { 
    printOut ("The image is too small");
     }

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Simuler opplastet bilde med tilfeldig størrelse mellom 1 og 8 MP
imageSize = Math.floor (Math.random() * 8)+1;

printOut ("Uploaded image size; "+ imageSize + " MP");

if (imageSize <4) { 
  printOut ("The image is too small");
} else if (imageSize >=6) { 
  printOut ("the image is too large");
} else {
  printOut ("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = [ 
   "January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"
 ];

 const noOfMonth = monthList.length;
 const monthName = monthList [Math.floor (Math.random()* noOfMonth)];

 //oppgave 8
 if (monthName.toLowerCase ().includes ("r")) { 
  printOut ("You need to take vitamin D");
   }else{ 
    printOut ("You do not need to take vitamin D");
     }
  printOut ("month:" + monthName);
  printOut (newLine);   

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let daysInMonth;

if (["April", "June", "September", "November"].includes (monthName)){ 
  daysInMonth = 30;
   }else if (monthName=== "February") { 
   daysInMonth = 28; // ikke skuddår
    } else { 
      daysInMonth = 31;
    daysInMonth = 31; 
 }

printOut("Days in" + monthName + ": " + daysInMonth); 
printOut (newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let galleryStatus;
if (monthName === "March" || monthName === "May") {
   }

  // const NoOfMonth= monthList.length; 
  // const monthName = monthList [Math.floor (Math.random()* noOfMonth) ];

  if (monthName === "March" || monthName === "May") {
    galleryStatus = "The gallery is closed for refurbishment.";
     }else if (monthName === "April") {
    galleryStatus = "The gallery is open in temporary premises next door.";
     } else {  
    galleryStatus = "The gallery is open as usual."; 
     }

    printOut ("Month: " + monthName); 
    printOut ("Gallery status: " + galleryStatus); 
    printOut (newLine)  
  

