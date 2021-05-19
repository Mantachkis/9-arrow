// fumction declaration - iprasta funkcija
function sumavimas(a,b){
    return a+b
}
console.log('suma =' , sumavimas(8,5));
// konstantai priskirta anonimine funkcijaa
const skirtumas = function (a,b){
    return a+b
}
console.log('skirtumas =' , skirtumas(8,5));

// arrow  rodyklines funkcijos
// istrinam funktion termina ir tarp(){} rasom =>
const sandauga = (a,b) =>{
return a*b
}
console.log('sandauga =' , sandauga(8,5));



// arrow  rodyklines funkcijos
// jai logikos bloke tik 1 funkcija nerasom {} ir return
const dalyba = (a,b) => a / b

console.log('dalyba =' , dalyba(8,5));


// arrow  rodyklines funkcijos
// jai parametru bloke tik 1 parametras (a) tai galim nersyt skliaustu
const kvadratu = a => a *a

console.log('kvadratu =' , kvadratu(8));


