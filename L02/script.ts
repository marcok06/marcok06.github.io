//Listener
window.onload = function () {
    document.getElementById("Deck",).addEventListener("click", drawCard, false);
    generateCards();
    gamePlay();
    buildHTML();

}


//Arrays

let Deck : Card[] = [];         //Deck Array
let Ablage : Card[] = [];       //Ablage Array
let Computer : Card[] = [];     //Gegnerkarten Array
let Player : Card[] = [];       //Eigene Karten Array


//Cardinterface
interface Card {
    cardColor : string;
    cardNumber : number;
    img : string;
}


//Funktionen
function generateCards () {          //Alle Karten werden einmalig erstellt und ins Deck gepusht

    let r1: Card = {
        cardColor : "rot",             //Farbe
        cardNumber : 1,                //Nummer
        img : "img/r1.jpg"             //Bildquelle
    };
    Deck.push(r1);

    let r2: Card = {
        cardColor : "rot",
        cardNumber : 2,
        img : "img/r2.jpg"
    };
    Deck.push(r2);

    let r3: Card = {
        cardColor : "rot",
        cardNumber : 3,
        img : "img/r3.jpg"
    };
    Deck.push(r3);

    let r4: Card = {
        cardColor : "rot",
        cardNumber : 4,
        img : "img/r4.jpg"
    };
    Deck.push(r4);

    let r5: Card = {
        cardColor : "rot",
        cardNumber : 5,
        img : "img/r5.jpg"
    };
    Deck.push(r5);

    let r6: Card = {
        cardColor : "rot",
        cardNumber : 6,
        img : "img/r6.jpg"
    };
    Deck.push(r6);

    let r7: Card = {
        cardColor : "rot",
        cardNumber : 7,
        img : "img/r7.jpg"
    };
    Deck.push(r7);

    let r8: Card = {
        cardColor : "rot",
        cardNumber : 8,
        img : "img/r8.jpg"
    };
    Deck.push(r8);

    let ge1: Card = {
        cardColor : "gelb",
        cardNumber : 1,
        img : "img/ge1.jpg"
    };
    Deck.push(ge1);

    let ge2: Card = {
        cardColor : "gelb",
        cardNumber : 2,
        img : "img/ge2.jpg"
    };
    Deck.push(ge2);

    let ge3: Card = {
        cardColor : "gelb",
        cardNumber : 3,
        img : "img/ge3.jpg"
    };
    Deck.push(ge3);

    let ge4: Card = {
        cardColor : "gelb",
        cardNumber : 4,
        img : "img/ge4.jpg"
    };
    Deck.push(ge4);
    
    let ge5: Card = {
        cardColor : "gelb",
        cardNumber : 5,
        img : "img/ge5.jpg"
    };
    Deck.push(ge5);

    let ge6: Card = {
        cardColor : "gelb",
        cardNumber : 6,
        img : "img/ge6.jpg"
    };
    Deck.push(ge6);

    let ge7: Card = {
        cardColor : "gelb",
        cardNumber : 7,
        img : "img/ge7.jpg"
    };
    Deck.push(ge7);

    let ge8: Card = {
        cardColor : "gelb",
        cardNumber : 8,
        img : "img/ge8.jpg"
    };
    Deck.push(ge8);

    let gr1: Card = {
        cardColor : "gr??n",
        cardNumber : 1,
        img : "img/gr1.jpg"
    };
    Deck.push(gr1);

    let gr2: Card = {
        cardColor : "gr??n",
        cardNumber : 2,
        img : "img/gr2.jpg"
    };
    Deck.push(gr2);

    let gr3: Card = {
        cardColor : "gr??n",
        cardNumber : 3,
        img : "img/gr3.jpg"
    };
    Deck.push(gr3);

    let gr4: Card = {
        cardColor : "gr??n",
        cardNumber : 4,
        img : "img/gr4.jpg"
    };
    Deck.push(gr4);

    let gr5: Card = {
        cardColor : "gr??n",
        cardNumber : 5,
        img : "img/gr5.jpg"
    };
    Deck.push(gr5);

    let gr6: Card = {
        cardColor : "gr??n",
        cardNumber : 6,
        img : "img/gr6.jpg"
    };
    Deck.push(gr6);

    let gr7: Card = {
        cardColor : "gr??n",
        cardNumber : 7,
        img : "img/gr7.jpg"
    };
    Deck.push(gr7);

    let gr8: Card = {
        cardColor : "gr??n",
        cardNumber : 8,
        img : "img/gr8.jpg"
    };
    Deck.push(gr8);

    let b1: Card = {
        cardColor : "blau",
        cardNumber : 1,
        img : "img/b1.jpg"
    };
    Deck.push(b1);

    let b2: Card = {
        cardColor : "blau",
        cardNumber : 2,
        img : "img/b2.jpg"
    };
    Deck.push(b2);

    let b3: Card = {
        cardColor : "blau",
        cardNumber : 3,
        img : "img/b3.jpg"
    };
    Deck.push(b3);

    let b4: Card = {
        cardColor : "blau",
        cardNumber : 4,
        img : "img/b4.jpg"
    };
    Deck.push(b4);

    let b5: Card = {
        cardColor : "blau",
        cardNumber : 5,
        img : "img/b5.jpg"
    };
    Deck.push(b5);

    let b6: Card = {
        cardColor : "blau",
        cardNumber : 6,
        img : "img/b6.jpg"
    };
    Deck.push(b6);

    let b7: Card = {
        cardColor : "blau",
        cardNumber : 7,
        img : "img/b7.jpg"
    };
    Deck.push(b7);

    let b8: Card = {
        cardColor : "blau",
        cardNumber : 8,
        img : "img/b8.jpg"
    };
    Deck.push(b8);

    Deck.sort(function(a, b){return 0.5 - Math.random()});      //Mischt das Deck

    console.log("Deck generiert und gemischt.")
}




//Starte Spiel
function gamePlay() {                                //5 Karten an beide Spieler verteilen & Karten aus Deck entfernen
    for (let i = 0; i < 5; i++){        
        Computer.push(Deck[0]);
        Deck.splice(0,1);
        Player.push(Deck[0]);
        Deck.splice(0,1);
    }
    Ablage.push(Deck[0]);                           //Eine Karte vom Deck auf Spielhaufen legen
    Deck.splice(0,1);

    console.log("Karten an Spieler verteilt")
    console.log("Erste Karte offengelegt")
}




function buildHTML(){
document.getElementById("Player").innerHTML = "";                           //Spielerkarten HTML
for (let i: number = 0; i <= Player.length -1; i++) {
    let playerCard: HTMLImageElement = document.createElement("img");
    playerCard.innerHTML = "";
    playerCard.setAttribute("src", Player[i].img);
    playerCard.addEventListener("click", function() {playCard(i);}, false);
    document.getElementById("Player").appendChild(playerCard);
}

document.getElementById("Deck").innerHTML = "";                             //Deckkarte wird erstellt
let deckCard: HTMLImageElement = document.createElement("img");
deckCard.setAttribute("src", "img/hochkant.jpg");
document.getElementById("Deck").appendChild(deckCard);

document.getElementById("Computer").innerHTML = "";                         //Gegnerkarten HTML
for (let i: number = 0; i <= Computer.length -1; i++) {
    let computerCard: HTMLImageElement = document.createElement("img");
    computerCard.innerHTML = "";
    computerCard.setAttribute("src", "img/hochkant.jpg");                  
    document.getElementById("Computer").appendChild(computerCard);
}
document.getElementById("Ablage").innerHTML = "";            
let ablageCard: HTMLImageElement = document.createElement("img");           //Ablagestapel HTML
ablageCard.innerHTML = "";
ablageCard.setAttribute("src", Ablage[Ablage.length -1].img);
document.getElementById("Ablage").appendChild(ablageCard);
}


function drawCard(){
    Player.push(Deck[0]);      
    Deck.splice(0,1);
    buildHTML();
    computerPlay();
    console.log("Karte wurde gezogen")
}



function playCard (clickedCard: number) {
    if (Player[clickedCard].cardColor==Ablage[Ablage.length -1].cardColor||             //Checkt ob Karte laut Spielregeln legbar ist (entweder gleiche Farbe oder gleiche Zahl)
        Player[clickedCard].cardNumber==Ablage[Ablage.length -1].cardNumber){

    Ablage.push(Player[clickedCard]);
    Player.splice(clickedCard, 1);
    buildHTML();
    if (Player.length==0){
        alert("Du hast gewonnen!!!");                          
    }
    if (Computer.length==0){
        alert("Du hast verloren!!!");                   
    }
    computerPlay();
}
console.log("Karte wurde gespielt")
}


function computerPlay(){
    let gespieltYN: boolean = false;
    for(let i: number = 0; i<Computer.length; i++){             //Geht Computerkarten durch und checkt ob Karte legbar ist, wenn ja dann wird Sie gelegt
        if (Computer[i].cardColor==Ablage[Ablage.length -1].cardColor||
            Computer[i].cardNumber==Ablage[Ablage.length -1].cardNumber){
            Ablage.push(Computer[i]);
            Computer.splice(i, 1);
            buildHTML();
            gespieltYN = true;
            break;
        }
    }
    if (gespieltYN==false){                                     //Falls nicht gespielt werden kann, wird eine Karte gezogen
        Computer.push(Deck[0]);
        Deck.splice(0,1);
        buildHTML();
    }
} 