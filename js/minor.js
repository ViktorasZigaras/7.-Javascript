console.log( '---// Kintamųjų inicijavimas //---' )

// 
console.log( '-- Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis --' )
const n1 = 1
const n2 = 2
const n3 = 3
console.log( n1, n2, n3 )
// 
console.log( '-- Sukurti 3 kintamuosius su teksto tipo reikšmėmis --' )
const s1 = 'a'
const s2 = 'b'
const s3 = 'c'
console.log( s1, s2, s3 )
// 
console.log( '-- Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis --' )
const bool = [ true, false ]
const num = [ 4, 5, 6 ]
const str = [ 'd', 'f', 'g', 'h' ]
console.log( bool, num, str )

console.log( '---// Veiksmai su kintamaisiais //---' )

// 
console.log( '-- Susumuoti visus skaičiaus tipo kintamuosius --' )
const sumN = n1 + n2 + n3
console.log( sumN )
// 
console.log( '-- Sujungti visus teksto tipo kintamuosius taip, jog tarp būtų sudarytas tarpas --' )
const sumS = s1 + ', ' + s2 + ', ' + s3
console.log( sumS )
// 
console.log( '-- Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką --' )
console.log( '- 1-2+3-4+5 -' )
const arithmetics = num[0] + num[1] - num[2]
console.log( arithmetics )
// 
console.log( '-- Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas --' )
const strings = str[3] + ', ' + str[2] + ', ' + str[1] + ', ' + str[0]
console.log( strings )

// console.log('---// Kintamųjų palyginimas //---')

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis - >
// kuris mažesnis - <
// ar jie lygūs - ===
// ar jie nelygūs - !==
// kuris didesnis arba lygus - >=
// kuris mažesnis arba lygus - <=

console.log( '---// Ciklo for panaudojimas //---' )

const forCycle = ( min, max ) => {
    let value = 0
    for ( let i = min; i <= max; i++ ) value += i
    console.log( value, 'min: ' + min, ', max: ' + max )
}

// 
console.log( '-- Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai): --' )
//
forCycle( 0, 0 )
forCycle( 0, 4 )
forCycle( 0, 100 )
forCycle( 574, 815 )
forCycle( -50, 50 )
forCycle( -70, 30 )

// 
console.log('-- Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: --')
// pvz.: “abcdef” -> “fedcba”
let string = ''
for ( let i = str.length - 1; i >= 0; i-- ) string += str[i]
console.log( string )