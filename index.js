
let frage = document.getElementById("frage");
let antwort1 = document.getElementById("button1");
let antwort2 = document.getElementById("button2");
let antwort3 = document.getElementById("button3");
let antwort4 = document.getElementById("button4");


let richtigeAntwort;
let quiz = ["Wie lange dauert es, bis das Licht der Sonne die Erde erreicht?", "8 Minuten und 20 Sekunden"," 12 Stunden","1 Tag"," 1 Woche","8 Minuten und 20 Sekunden"];
let quiz2 = ["Welcher Planet hat die meisten Monde in unserem Sonnensystem?","Jupiter", "Mars" , "Saturn", "Uranus","Jupiter"];
let quiz3 = ["Was ist die größte bekannte Galaxie im Universum?","Die Milchstraße","Andromeda-Galaxie","IC 1101","Whirlpool-Galaxie","IC 1101"];
let quiz4 = ["Wie viele Planeten hat unser Sonnensystem?","7","8","9","10","8"];
let quiz5 = ["Welcher dieser Sterne ist der nächste zur Erde?","Sirius","Proxima Centauri","Vega"," Alpha Centauri A"," Proxima Centauri"];


let ruond = 0;
newQuestion();

antwort1.onclick = function(){
    ruond++;
   check(richtigeAntwort,antwort1);
}
antwort2.onclick = function(){
    ruond++;
    check(richtigeAntwort,antwort2);
    
}
antwort3.onclick = function(){
    ruond++;
    check(richtigeAntwort,antwort3);
}
antwort4.onclick = function(){
    ruond++;
    check(richtigeAntwort,antwort4);
}

function check(richtigeAntwort, button){
    
    if(button.textContent == richtigeAntwort){
        window.alert("Richtig :)");
        newQuestion();
     }
    else{
        window.alert("Falsch :( . Die Richtige Antwort ist "+ richtigeAntwort);
        newQuestion();
     }
}

function newQuestion(){
    let quiztoload;
    switch(ruond){
        case 0:
          quiztoload = quiz;
          break;
        case 1:
            quiztoload = quiz2;
            break;
        case 2:
            quiztoload = quiz3;
            break;
        case 3: 
            quiztoload = quiz4;
            break;
        case 4:
            quiztoload = quiz5;
            break;
        default:
            window.alert("Das Quiz ist zuende");
            break;
    }
    if(quiztoload != null){
    frage.textContent = quiztoload[0];
    antwort1.textContent = quiztoload [1];
    antwort2.textContent = quiztoload [2];
    antwort3.textContent = quiztoload [3];
    antwort4.textContent = quiztoload [4];
    richtigeAntwort = quiztoload [5];
    }
}
