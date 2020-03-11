// Funkcijos
console.log( '---// Kintamųjų palyginimas //---' )

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// 
console.log( '-- Funkcija pavadinimu “tusciaFunkcija”: --' )
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
const tusciaFunkcija = () => {
    return false
}
// TESTAS:
// rezultatas: false
console.log( tusciaFunkcija() )

// 
console.log( '-- Funkcija pavadinimu “daugyba”: --' )
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
const daugyba = ( a, b ) => {
    return a * b
}
// TESTAI:
console.log( daugyba( 1, 5 ) )
console.log( daugyba( 8, 9 ) )
console.log( daugyba( 1,5, 3,25 ) )

// 
console.log( '-- Funkcija pavadinimu “didziausiasSkaiciusSarase”: --' )
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
const didziausiasSkaiciusSarase = ( arr ) => {
    let result = ''
    if ( !Array.isArray( arr ) ) result = 'Pateikta netinkamo tipo reikšmė.'
    else if ( arr.length === 0 ) result = 'Pateiktas sąrašas negali būti tuščias.'
    else {
        let max = -Infinity
        for ( let i = 0; i < arr.length; i++ ) {
            if ( i === 0 ) max = arr[0]
            else {
                const value = arr[i]
                if ( typeof( value ) === 'number' && !isNaN( value ) && max < value ) max = value //galima tikrinti del begalybiu
            }
        }
        result = max
    }
    //jei visas masyvas blogas - kazkaip apdoroti su return ir if
    return console.log( result )
}
// TESTAI:
// rezultatas: 1
// rezultatas: 3
// rezultatas: 78
// rezultatas: 69
// rezultatas: -1
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”
didziausiasSkaiciusSarase( [ 1 ] )
didziausiasSkaiciusSarase( [ 1, 2, 3 ] )
didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] )
didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] )
didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] )
didziausiasSkaiciusSarase( 'pomidoras' )
didziausiasSkaiciusSarase( [] )


"use strict";

// 
console.log( '-- Funkcija pavadinimu “isrinktiRaides”: --' )
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
const isrinktiRaides = ( text, index ) => {
    let result = ''
    if ( typeof( text ) !== 'string' ) result = 'Pirmasis kintamasis yra netinkamo tipo.'
    else if ( text === '' || text === undefined || text.length > 100 ) result = 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.'
    //skaicius
    //baigtinis
    //be liekanos
    //ne 0
    else if ( typeof( index ) !== 'number' || !isFinite( index ) || index % 1 !== 0) result = 'Antrasis kintamasis netinka.'
    else if ( index === 0 ) result = 'Antrasis kintamasis turi būti didesnis už nulį.'
    else if ( index > text.length - 1 ) result = 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    else {
        if (index > 0) {
            for ( let i = index - 1; i < text.length; i += index ) {
                result += text[i]
            }
        }
        else if (index < 0) {
            for ( let i = text.length + index; i >= 0; i += index) {
                result += text[i]
            }
        }
        
    }
    return result
}
// TESTAI:
// rezultatas: “bdf”
// rezultatas: “cfil”
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
// rezultatas: “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
console.log( isrinktiRaides( "abcdefg", 2 ) )
console.log( isrinktiRaides( "abcdefghijkl", 3 ) )
console.log( isrinktiRaides( "abc", 0 ) )
console.log( isrinktiRaides( "abc", 4 ) )
console.log( isrinktiRaides( 1561, 2 ) )
console.log( isrinktiRaides( '', 1 ) )
console.log( isrinktiRaides( "abcdefghijkl", 3.25 ) )

console.log( isrinktiRaides( "abcdefg", -2 ) )
console.log( isrinktiRaides( "abcdefghijkl", -3 ) )


// 
console.log( '-- Funkcija pavadinimu “dalyba”: --' )
// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// gražinti suskaičiuotą reikšmę
const dalyba = ( a, b ) => {
    let result = '---'
    if ( typeof a !== 'number' || !isFinite( a ) ) result = '- A ne skaicius -' //!isFinite
    else if ( typeof b !== 'number' || !isFinite( b ) ) result = '- B ne skaicius -' //!isFinite
    else if ( b === 0 ) result = '- B yra nulis -'
    else result = a / b
    return result
}
// TESTAI:
console.log( dalyba( 'aa', 1 ) )
console.log( dalyba( '', 1 ) )
console.log( dalyba( [], 1 ) )
console.log( dalyba( [ false, 5 ], 1 ) )
console.log( dalyba( undefined, 1 ) )
console.log( dalyba( true, 1 ) )
console.log( dalyba( 1, 1 ) )
console.log( dalyba( -1, 1 ) )
console.log( dalyba( 1.5, 2 ) )
console.log( dalyba( 1, 0 ) )
console.log( dalyba( 101, 10 ) )
console.log( dalyba( 7, 88 ) )
