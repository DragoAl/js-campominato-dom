// CAMPOMINATO
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, 
// la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// 1.L'USER SELEZIONA IL LV DI DIFFICOLTA'
// 1.1 ATTRAVERSO IL CLICK SU DEI BOTTONI VIENE SCELTO IL LV.
// 2.IL CLICK COMPORTA L'ITERAZIONE DI UN CICLO A SECONDA DELLE CELLE SCELTE
// 2.1 SEMPRE AL CLICK SARA' AGGIUNTA UNA CLASSE PER IDENTIFICARE LE CELLE GIà SELEZIONATE
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// genero un array di 16 bombe
// devo far si che ogni elemento dell'array si accoppi a un elemento della griglia

// okI numeri nella lista delle bombe non possono essere duplicati.
// okIn seguito l’utente clicca su ogni cella:
// ok se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// ok altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// (come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
// La partita termina quando il giocatore clicca su una bomba
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. 
// ok(quindi se ci pensate dovrete tenere traccia del punteggio).

const gridCont = document.getElementById("container");
const btnEasy = document.getElementById("easy-btn");
const btnMed = document.getElementById("med-btn");
const btnHard = document.getElementById("hard-btn");
const resultBox = document.getElementById("result");
let score= 0;

// selezionato il lv il click itera il ciclo for per il numero di elementi a seconda della difficoltà.
// creandoli e inserendoli in griglia
// l'altro click all'interno del primo serve per assegnare una classa che cambi il colore di sfondo al click dell'utente
btnEasy.addEventListener("click",
    function() {
        // genero l'array di 16 bombe
        const newBomb = randNumUniqueGen ("1", "100", "16");
        console.log("newbomb", newBomb);

        for (let i = 1; i <= 100; i++) {
            let newElement = elementGenerator ("div" , "square-easy");
            gridCont.append(newElement);
            newElement.setAttribute("id", i); //settiamo un id univoco per ogni elemento

            newElement.addEventListener("click",
                function() {
                    newElement.innerText= i;
                    newElement.id = i; //richiamiamo l'attributo settato a r.43
                    let boom = parseInt(newElement.id);
                        
                    if(newBomb.includes(boom)){     //verifico se l'array di bombe contiene i numeri uguali, se sono uguali esplodono 
                        this.classList.add("bomb");
                        console.log("hai perso");
                        resultBox.innerHTML = `Boom!!, GAME OVER, Hai totalizzato ${score} punti `;
                        console.log(score);
                        
                    } else {
                        this.classList.add("clicked-true");
                        score += 1;
                        console.log(score);
                    }
        
                }
            );
            
            
                   
        }
       
    }
);

btnMed.addEventListener("click",
    function() {
         // genero l'array di 16 bombe
         const newBomb = randNumUniqueGen ("1", "81", "16");
         console.log("newbomb", newBomb);
        for (let i = 1; i <= 81; i++) {
            let newElement = elementGenerator ("div" , "square-med");
            gridCont.append(newElement);
            newElement.setAttribute("id", i); //settiamo un id univoco per ogni elemento

            newElement.addEventListener("click",
                function() {
                    newElement.innerText= i;
                    newElement.id = i; //richiamiamo l'attributo settato a r.43
                    let boom = parseInt(newElement.id);
                        
                    if(newBomb.includes(boom)){     //verifico se l'array di bombe contiene i numeri uguali, se sono uguali esplodono 
                        this.classList.add("bomb");
                        console.log("hai perso");
                        resultBox.innerHTML = `Boom!!, GAME OVER, Hai totalizzato ${score} punti `;
                        console.log(score);
                        
                    } else {
                        this.classList.add("clicked-true");
                        score += 1;
                        console.log(score);
                    }
        
                }
            );
               
        }
    }
);

btnHard.addEventListener("click",
    function() {
         // genero l'array di 16 bombe
         const newBomb = randNumUniqueGen ("1", "49", "16");
         console.log("newbomb", newBomb);
        for (let i = 1; i <= 49; i++) {
            let newElement = elementGenerator ("div" , "square-hard");
            gridCont.append(newElement);
            newElement.setAttribute("id", i); //settiamo un id univoco per ogni elemento

            newElement.addEventListener("click",
                function() {
                    newElement.innerText= i;
                    newElement.id = i; //richiamiamo l'attributo settato a r.43
                    let boom = parseInt(newElement.id);
                        
                    if(newBomb.includes(boom)){     //verifico se l'array di bombe contiene i numeri uguali, se sono uguali esplodono 
                        this.classList.add("bomb");
                        console.log("hai perso");
                        resultBox.innerHTML = `Boom!!, GAME OVER, Hai totalizzato ${score} punti `;
                        console.log(score);
                        
                    } else {
                        this.classList.add("clicked-true");
                        score += 1;
                        console.log(score);
                    }
        
                }
            );
                 
        }
    }
);






