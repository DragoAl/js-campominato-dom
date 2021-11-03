// FUNZIONI UTILI
function elementGenerator (customElement , customClass) {
    let node = document.createElement(customElement);
    node.classList.add(customClass);
    return node
}

function randNumUniqueGen (min, max, iterCycles) {
    const randNumbers = [];
    // fino a che la lunghezza dell'array non è quella desiderata
    while (randNumbers.length < iterCycles){
        let number = Math.floor(Math.random() * (max - min) + min);
        console.log(number);
        let found = false;
    
        // CONTROLLO CHE NON CI SIANO DOPPIONI
        for ( let i = 1; i <= randNumbers.length; i++){
            if ( number === randNumbers[i] ) {
                found = true
            }
        }
        
        if (found == false) {
            randNumbers.push(number);
        }
    }

    return randNumbers
}

// GENERATORE NUMERI RANDOM
function randNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}

// VEDERE SE UN NUMERO è PARI O DISPARI
function pairUnpair (num) {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }

}
