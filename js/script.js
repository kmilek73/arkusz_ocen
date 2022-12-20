

const ObliczSrednia = () => {
    var allClass = document.getElementsByClassName('matematyka'); // pobranie kolekcji ze wszystkimi elementami o określonej klasie
    var allClassLen = (allClass.length)


    for (let i = 1; i < allClassLen; i++) {
        //pobranie listy div uczeń - minus jedna klasa
        let getUczniowie = document.getElementById('uczen' + [i]);
        /* Pobranie imienia i nzwiska z tablicy getUczniowie */
        /*    let tekst = getUczniowie.innerText;
           console.log('IMIĘ NAZWISKO', tekst); */

        let m = getUczniowie.querySelector('.matematyka'); //pobranie clasy matematyka
        let ocena_matma = m.getAttribute('value'); //pobranie atrybutu value
        let p = getUczniowie.querySelector('.polski'); //pobrsanie clasy polski
        let ocena_polski = p.getAttribute('value'); //pobranie atrybutu value
        let b = getUczniowie.querySelector('.biologia'); //pobrsanie clasy polski
        let ocena_biologia = b.getAttribute('value'); //pobranie atrybutu value
        let g = getUczniowie.querySelector('.geografia'); //pobrsanie clasy polski
        let ocena_geografia = g.getAttribute('value'); //pobranie atrybutu value
        let f = getUczniowie.querySelector('.fizyka'); //pobrsanie clasy polski
        let ocena_fizyka = f.getAttribute('value'); //pobranie atrybutu value
        let c = getUczniowie.querySelector('.chemia'); //pobrsanie clasy polski
        let ocena_chemia = c.getAttribute('value'); //pobranie atrybutu value
        let inf = getUczniowie.querySelector('.informatyka'); //pobrsanie clasy polski
        let ocena_informatyka = inf.getAttribute('value'); //pobranie atrybutu value


        let zajecia_dod = getUczniowie.querySelector('.zajecia-dodatkowe'); //pobrsanie clasy zajecia dodatkow
        let zajecia_dodatkowe = zajecia_dod.getAttribute('value'); //pobranie atrybutu valuev-vlista
        let pP = parseFloat(ocena_polski);
        let pM = parseFloat(ocena_matma);
        let pB = parseFloat(ocena_biologia);
        let pG = parseFloat(ocena_geografia);
        let pF = parseFloat(ocena_fizyka);
        let pC = parseFloat(ocena_chemia);
        let pInf = parseFloat(ocena_informatyka);
        if (zajecia_dodatkowe == "polski") {
            pPN = (pP + 0.5);
        } else { pPN = pP }
        if (zajecia_dodatkowe == "fizyka") {
            pFN = (pF + 0.5);
        } else { pFN = pF }
        if (zajecia_dodatkowe == "matematyka") {
            pMN = (pM + 0.5);
        } else { pMN = pM }
        if (zajecia_dodatkowe == "biologia") {
            pBN = (pB + 0.5);
        } else { pBN = pB }
        if (zajecia_dodatkowe == "chemia") {
            pCN = (pC + 0.5);
        } else { pCN = pC }
        if (zajecia_dodatkowe == "informatyka") {
            pInfN = (pInf + 0.5);
        } else { pInfN = pInf }
        if (zajecia_dodatkowe == "geografia") {
            pGN = (pG + 0.5);
        } else { pGN = pG }


        if (pP == 1 || pM == 1 || pB == 1 || pG == 1 || pF == 1 || pC == 1 || pInf == 1) {
            let zmienTlo = getUczniowie.querySelector('.uczen'); //pobranie clasy uczeń
            zmienTlo.classList.add('red'); //dodanie clasy green do pola red
        }

        let Sr = (pPN + pMN + pBN + pGN + pFN + pCN + pInfN) / 7;
        var Srednia = Sr.toFixed(2);
        if (Srednia > 4.75) {
            let zmienTlo = getUczniowie.querySelector('.uczen'); //pobranie clasy uczeń
            zmienTlo.classList.add('green'); //dodanie clasy green do pola uczeń
        }


        let zmiana_sredniej = getUczniowie.querySelector('.srednia');
        zmiana_sredniej.innerText = (Srednia);
        //var lancuch2 = Srednia.toString();
    }


}
let btn = document.getElementById('oblicz')
btn.addEventListener('click', ObliczSrednia);



