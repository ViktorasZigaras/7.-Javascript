// 
console.log( '-- Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”: --' )
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
const skaitmenuKiekisSkaiciuje = ( num ) => {
    let result = ''
    if ( typeof( num ) !== 'number' || !isFinite( num ) ) result = 'Pateikta netinkamo tipo reikšmė.'
    else {
        result = ( Math.abs( num ) + '' ).replace( '.', '' ).length
    }
    return console.log( result )
}
// TESTAI:
// rezultatas: 1
// rezultatas: 3
// rezultatas: 11
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

skaitmenuKiekisSkaiciuje( 5 ) 
skaitmenuKiekisSkaiciuje( 781 ) 
skaitmenuKiekisSkaiciuje( 37060123456 ) 
skaitmenuKiekisSkaiciuje( true ) 
skaitmenuKiekisSkaiciuje( 'asd' ) 
skaitmenuKiekisSkaiciuje( NaN ) 
skaitmenuKiekisSkaiciuje( -NaN ) 
//masyvai, masyvai masyvuose, t.t., etc...

skaitmenuKiekisSkaiciuje( undefined ) 
skaitmenuKiekisSkaiciuje( -10 ) 
skaitmenuKiekisSkaiciuje( -11.1111 ) 
skaitmenuKiekisSkaiciuje( 12.00 ) 
skaitmenuKiekisSkaiciuje( 0x11 ) 
skaitmenuKiekisSkaiciuje( 0o11 ) 
skaitmenuKiekisSkaiciuje( 0b11 ) 
skaitmenuKiekisSkaiciuje( null ) 
skaitmenuKiekisSkaiciuje( Infinity ) 
skaitmenuKiekisSkaiciuje( -Infinity ) 
skaitmenuKiekisSkaiciuje( 123e-3 ) 
skaitmenuKiekisSkaiciuje( 123e+2 ) 
skaitmenuKiekisSkaiciuje( 564848978978978948945645648489489489489489489489848948989489489489489489489489489484 ) 
