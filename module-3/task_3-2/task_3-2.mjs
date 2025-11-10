"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//Linje 1: 1-10
let tekst = "";
for (let i = 1; i <= 10; i++) {
    tekst += i + (i < 10? " ":" ");
}
printOut(tekst);
printOut (newLine);

//Linje 2: 10-1
tekst = "";
for (let i =10; i >= 1; i--){
    tekst += i + (i < 1 ? " ": " ");
}
printOut (tekst);
printOut (newLine); 




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Tallet vi tenker på
let riktigTall=45;

// Datamaskinen skal gjette til den treffer riktig
let gjett = 0;

// Så lenge tallet ikke er riktig, fortsett å gjette 
while (gjett!== riktigTall) {
    gjett = Math.floor(Math.random()* 60)+1;
}
// Når løkka er ferdig, skriv resultatet
printOut("Datamaskinen gjettet riktig tall: " + gjett);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Tallet vi tenker på
let riktigTall2 = 450000;


// Teller hvor mange forsøk
let forsok = 0;

// Starter klokke
let start = Date.now();

let gjett2 = 0;

// Gjetter til det treffer
while (gjett2 !== riktigTall2) {
    gjett2 = Math.floor(Math.random() * 1000000) + 1;
    forsok++;
}
// Stopper klokke
let slutt = Date.now();

// Regner ut tid brukt
let tid = slutt - start;
 
// Skriver ut resultatet
printOut("Datamaskinen fant tallet: " + gjett2);
printOut("Antall forsøk: " + forsok);
printOut("Tid brukt (millisekunder): " + tid);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
for (let tall = 2; tall < 200; tall++) {
    let erPrim = true;

    for (let dele = 2; dele < tall; dele++) {
        if (tall % dele === 0) {
            erPrim= false;
        break;
    }
}
if (erPrim) {
    printOut (tall);
}
 }
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// lager 7 rader
for (let rad = 1; rad <= 7; rad ++) {
    let linje = ""; // tom linje som skal fylles
    
    // lager 9 kolonner på hver rad
    for (let kol = 1; kol <= 9; kol ++) {
        linje += "K" + kol + "R" + rad + " "; // legger til kolonne og rad 
    }
    // Skriver ut hele raden etter kolonnene er ferdige
    printOut (linje);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const task6Poeng = Math.floor(Math.random() * 236) +1; 
const task6Prosent = task6Poeng / 236 * 100; 
let karakter; 
if (task6Prosent < 40) {
    karakter = "F"
     } else if (task6Prosent <52) {
    karakter = "E"
     } else if (task6Prosent <62) {
    karaktre = "D"
     } else if (task6Prosent <76) {
    karakter = "C"
     } else if (task6Prosent <88) { 
    karakter = "B"
     } else { 
    karakter = "A"    
    }
printOut ("Studenten fikk " + task6Prosent.toFixed (0) + "%, som tilsvarer " + task6Poeng.toString() + "poeng." );
printOut ("Dette tilsvarer karakteren " + karakter.toString ()); 
    

       
    

    

    
    

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//hopper over denne siden den er så krevende. jeg må fokusere på det jeg kan.
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
