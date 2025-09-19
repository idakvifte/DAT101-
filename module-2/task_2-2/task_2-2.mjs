"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";




printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let regnestykke = 2+3*2-4*6; 
let regnestykke2 = 2+3 * (2-4) *6; 
printOut(regnestykke);
printOut ("2+3*(2-4)*6=" + regnestykke2);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");


let meter =25; 
let centimeter=34;
let inch=25.4; 

let tilmillimeter = (meter*1000) + (centimeter*10); 
let tilinch = tilmillimeter / inch; 

printOut("25 meter og 34 centimeter er "+tilinch.toFixed(2) + " inches");
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let dager= 3;
let timer= 12;
let minutter = 14;
let sekunder = 45; 

let dagertilminutter = (dager * 24) * 60; 
let timertilminutter = timer* 60;
let sekundertilminutter = sekunder/ 60; 

let totalminutter= dagertilminutter +timertilminutter+ minutter + sekundertilminutter;
printOut("total antall minutter er; " +totalminutter.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let totalMinutes = 6322.52;

// days
let days = Math.floor(totalMinutes / 1440);

// hours
let remainingMinutes = totalMinutes - (days * 1440);
let hours = Math.floor(remainingMinutes / 60);

// minutes
remainingMinutes = remainingMinutes - (hours * 60);
let minutes = Math.floor(remainingMinutes);

// seconds
let seconds = Math.floor((remainingMinutes-minutes)*60);

printOut(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let usd =54;
let nok =54;

let nokPerUsd=76/8.6; 
let usdPerNok=8.6/76;

// USD til NOK
let usdToNok = Math.round(usd * nokPerUsd);

//NOK tilUSD
let nokToUsd = Math.round(nok * usdPerNok)

printOut(`${usd}USD er ${usdToNok}kroner`);
printOut(nok + "NOK er + nokToUsd + dollard");
printOut (newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let text = "There is much between heaven and earth that we do not understand.";

// 1. Antall tegn
printOut("Antall tegn i teksten:"+text.length);
printOut (newLine)

//2. Tegnet på posisjon 19
printOut("Tegn på posisjon 19:" + text.charAt (19));
printOut (newLine)

//. 3 Tegn fra posisjon 35 og 8 fremover
printOut("Tegn fra posisjon 35 og 8 fremover:"+ text.substr(35, 8));
printOut(newLine);

//4. Index der 'earth'starter
printOut ("Index der 'earth' starter: "+ text.indexOf('earth')); 
printOut (newLine) 

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// 1. Is 5 greater than 3?
printOut ("5 > 3: " + (5 < 3));

// 2. Is 7 greater than or equal to 7?
printOut("7 >= 7: " + (7 <= 7));

// 3. Is 'a' greater than 'b'?
printOut ("'a' > 'b': "+ ('a' > 'b')); 

// 4. Is '1' less than 'a'?
printOut("'1' < 'a': " + ('1' < 'a'));

// 5. Is '2500' less than 'abcd'?
printOut("'2500' < 'abcd': " + ('2500' < 'abcd')); 

//. 6 is 'ame' not equal to 'thomas'?
printOut("'ame' != 'thomas': " + ('ame' != 'thomas')); 

// 7. (2 equals 5) is this statement true?
printOut (" (2 == 5): " + (2 == 5)); 

// 8. ('abcd' is greater than 'bcd' is this statement false?
printOut ("'abcd' > 'bcd': "+ ('abcd'> 'bcd')); 


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// fra "254" til tall
let text1= "254"; 
let number1= Number(text1);
printOut(text1 + " -> " + number1);

// fra "57.23" til tall
let text2 = "57.23";
let number2 = Number (text2);
printOut(text2 + " -> "+ number2);

// fra "25 kroner" til tall
let text3 = "25 kroner";
let number3 = parseInt (text3);  // tar ut 25 som tall 
printOut(text3 + " -> " + number3);

printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = Math.floor (Math.random() *360) + 1;
printOut("Random tall mellom 1 og 360:"+ r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let daysTotal = 131;
let weeks = Math.floor(daysTotal /7); //hele uker 
let daysLeft = daysTotal % 7;
printOut(daysTotal + "dager er " + weeks + "uker og " + daysLeft + "dager");
printOut(newLine);