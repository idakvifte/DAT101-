"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let text = " ";
function printOutToday() { 
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 
    const dateToday = new Date(); 
    text = dateToday.toLocaleDateString("no-BM", options);
    return dateToday;
    
} 
const today = printOutToday();
printOut(text);
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function release(aDate) {
    const millisecondsInDay = 8.64e7; 
    const releaseDate = new Date("2026-05-14"); 
    const days = Math.floor((releaseDate - aDate) / millisecondsInDay);
    printOut("It is " + days + " days to release hype train"); 
}

release(today);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function calcCircle (aRadius) {
    const Diameter = aRadius * 2; 
    printOut ("Diametre is " + Diameter.toString() + newLine);
    printOut ("Circumference is " + (Diameter * Math.PI).toFixed (2) + newLine);
    printOut ("Area is " + (Math.pow(aRadius, 2) * Math.PI).toFixed (2));
}
calcCircle (5); 
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function calcRect(aRect) {
    printOut ("Rectangle width: " + aRect.width.toString () + ", height: " + aRect.height.toString() + newLine);
    printOut ("Circumference is " + ((aRect.width * 2) + (aRect.height * 2)).toFixed (2) + newLine);
    printOut ("Areal is " + (aRect.width * aRect.height).toFixed(2)); 
}
calcRect({ width: 4, height: 3 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const ETemperatureID = { Celsius: 1, Fahrenheit: 2, Kelvin: 0 }; 
const temperature = { Celsius: 0, Fahrenheit: 0, Kelvin: 0 }; 

let aTemperatureID = ETemperatureID.Celsius;
let aTemperature = 25;

switch (aTemperatureID) {
    case ETemperatureID.Celsius:
        printOut(aTemperature + " Celsius" + newLine);
        temperature.Celsius = aTemperature;
        temperature.Fahrenheit = (aTemperature * 9 / 5) + 32;
        temperature.Kelvin = aTemperature + 273.15;
        break; 

    case ETemperatureID.Fahrenheit:
        printOut(aTemperature + " Fahrenheit" + newLine);
        temperature.Celsius = (aTemperature - 32) * (5 / 9);
        temperature.Fahrenheit = aTemperature;
        temperature.Kelvin = (aTemperature + 459.67) * (5 / 9);
        break; 

    case ETemperatureID.Kelvin:
        printOut(aTemperature + " Kelvin" + newLine);
        temperature.Celsius = aTemperature - 273.15;
        temperature.Fahrenheit = (aTemperature * 9 / 5) - 459.67;
        temperature.Kelvin = aTemperature;
        break;
}

printOut("Celsius = " + Math.round(temperature.Celsius).toString() + newLine);
printOut("Fahrenheit = " + Math.round(temperature.Fahrenheit).toString() + newLine);
printOut("Kelvin = " + Math.round(temperature.Kelvin).toString() + newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
